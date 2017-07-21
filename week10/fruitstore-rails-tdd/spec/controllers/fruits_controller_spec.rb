require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe "GET /fruits (fruits#index)" do
    before do
      3.times { |i| Fruit.create name: "Fruit number #{ i }"  }
    end

    describe 'as HTML' do
      before do
        get :index
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

      it "should respond with @fruits that contains all fruits in reverse order" do
        expect( assigns(:fruits) ).to be    # @fruits exists in fruits#index
        expect( assigns(:fruits).length ).to eq 3
        expect( assigns(:fruits).first.class ).to eq Fruit
        expect( assigns(:fruits).first.name ).to eq 'Fruit number 2'
      end

      it 'should render the index view' do
        expect(response).to render_template('index')
      end

    end # as html

    describe 'as JSON' do
      before do
        get :index, :format => :json  # format: :json
      end

      it 'should respond with an HTTP status of 200' do
        expect(response).to be_success
      end

      it 'should respond using a content type of JSON' do
        expect(response.content_type).to eq 'application/json'
      end

      it 'should provide the name of the fruit in the JSON response' do
        fruits = JSON.parse( response.body )
        expect( fruits.length ).to eq 3
        expect( fruits.first['name'] ).to eq 'Fruit number 2'
      end



    end # as JSON

  end # GET /fruits

  describe "POST to /fruits (fruits#create)" do

    describe 'a fruit with valid information' do
      before do
        post :create, params: { fruit: { name: 'Strawberry'} }
      end

      it 'should redirect to the show action' do
        expect(response).to redirect_to( assigns(:fruit) )   # check redirect to /fruits/NEWID
      end

      it 'should increase the number of fruits' do
        expect( Fruit.count ).to eq 1
      end

      it 'should save the correct name of the fruit' do
        expect( Fruit.first.name).to eq 'Strawberry'
      end

    end # valid info

    describe 'a fruit with invalid information' do
      before do
        post :create, params: { fruit: { name: ''} }
      end

      it 'should not increase the number of fruits' do
        expect( Fruit.count ).to eq 0
      end

      it 'should render the new template' do
        expect( response ).to render_template(:new)
      end


    end # invalid info


  end # POST create

end
