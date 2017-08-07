require 'rails_helper'

RSpec.describe "fruits/index.html.erb", type: :view do
  # pending "add some examples to (or delete) #{__FILE__}"

  #
  describe "rendering the Fruit Index page structure" do
    before do
      3.times { |i| Fruit.create name: "Fruit number #{ i }"  }
      render
    end

    it 'should have a nice heading' do
      expect( rendered ).to match /All Fruits/
    end

    it 'should include the name of one of the fruits in the DB' do
      get :index
      expect( rendered ).to match /Fruit number 0/
    end

  end


end
