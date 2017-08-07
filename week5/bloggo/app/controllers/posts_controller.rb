class PostsController < ApplicationController
  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find params[:id]
    # raise 1
  end

  def ajaxbutton
    # If you set 'remote: true' in your button_to or link_to or form helper, instance vars
    # defined here can now be used in app/views/ajaxbutton.js.erb to return data on a button
    # click or a form submit
    @posts = Post.all
  end

  def destroy
  end
end
