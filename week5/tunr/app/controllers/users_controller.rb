class UsersController < ApplicationController
  def new
    @user = User.new

    session["rando"] = Random.rand 100000

  end

  def create
    user = User.create user_params
    redirect_to user_path(user.id)   # /users/17

    @has_logged_in = true

  end

  def index
    @users = User.all
  end

  def show
    # catches URLS like /users/:id
    @user = User.find params["id"]
  end

  def edit
    @user = User.find params["id"]
  end

  def update
    user = User.find params["id"]
    user.update user_params
    redirect_to user_path( params["id"] )
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :image, :password, :password_confirmation)
  end

end
