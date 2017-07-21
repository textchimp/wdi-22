require "rails_helper"

RSpec.describe PeachesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/peaches").to route_to("peaches#index")
    end

    it "routes to #new" do
      expect(:get => "/peaches/new").to route_to("peaches#new")
    end

    it "routes to #show" do
      expect(:get => "/peaches/1").to route_to("peaches#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/peaches/1/edit").to route_to("peaches#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/peaches").to route_to("peaches#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/peaches/1").to route_to("peaches#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/peaches/1").to route_to("peaches#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/peaches/1").to route_to("peaches#destroy", :id => "1")
    end

  end
end
