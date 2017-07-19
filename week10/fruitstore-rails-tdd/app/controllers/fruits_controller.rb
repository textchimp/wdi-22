class FruitsController < ApplicationController
  def index
    @fruits = [1,2] #Fruit.all
    # puts "CONTROLLER"
  end
end
