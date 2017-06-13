
class ArtistsController < ApplicationController

  def new
  end

  def create
    # raise 'hell'
    artist = Artist.create({
      name: params["name"],
      nationality: params["nationality"],
      dob: params["dob"],
      period: params["period"],
      image: params["image"]
    })

    redirect_to "/artists/#{ artist.id }"  # go to show page
  end

  def edit
    @artist = Artist.find params["id"]
  end

  def update
    artist = Artist.find params["id"]

    artist.update({
      name: params["name"],
      nationality: params["nationality"],
      dob: params["dob"],
      period: params["period"],
      image: params["image"]
    })

    redirect_to  "/artists/#{ artist.id }"  # go to show page
  end

  def index
    @artists = Artist.all
  end

  def show
    # id = params["id"]
    @artist = Artist.find params["id"]
  end

  def destroy
    # artist = Artist.find params["id"]
    # artist.destroy
    Artist.find( params["id"] ).destroy

    redirect_to "/artists"
  end


end
