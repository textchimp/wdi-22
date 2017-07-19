require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe "GET /fruits (fruits#index)" do
    before do
      get :index
      3.times { |i| Fruit.create name: "Fruit number #{ i }"  }
    end

    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "should respond with @fruits that contains all fruits" do

      expect( assigns(:fruits) ).to be    # @fruits exists in fruits#index

      # binding.pry

      # puts "Fruits:", assigns(:fruits).length

      expect( assigns(:fruits).length ).to eq 3



    end


  end # GET /fruits

end
