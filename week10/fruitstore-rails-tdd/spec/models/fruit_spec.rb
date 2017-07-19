require 'rails_helper'

RSpec.describe Fruit, type: :model do

  it { should belong_to(:shelf) }

  # pending "add some examples to (or delete) #{__FILE__}"

  describe 'A pear' do
    before do
      @pear = Pear.create name: "Nashi"
    end

    it 'should be kind of squishy' do
      expect( @pear.squishy? ).to be
      expect( @pear.squishy? ).to eq true
    end

    it 'should remember which class it is via Single Table Inheritance (STI)' do
      fruit = Fruit.find @pear.id
      expect( fruit ).to_not be_nil

      expect( fruit.class ).to eq Pear
      expect( fruit ).to eq @pear

      expect( fruit.is_a?(Fruit) ).to be true
      expect( fruit.class.ancestors ).to include(Fruit)


    end


  end  # pear

end
