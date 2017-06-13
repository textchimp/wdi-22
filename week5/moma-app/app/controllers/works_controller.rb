class WorksController < ApplicationController

  def new
    @work = Work.new
  end

  def create
    # raise 'hell'
    work = Work.create work_params
    redirect_to "/works"
  end

  def edit
  end

  def update
  end

  def index
    @works = Work.all
  end

  def show
  end

  def destroy
  end

  private
  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end

end
