class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse
    # puts "=" * 50
    # puts "CONTROLLER"

    respond_to do |format|
      format.html {} # Render the default template for this action
      format.json { render json: @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params

    if @fruit.save
      redirect_to @fruit
    else
      render :new
    end

  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end

end
