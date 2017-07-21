class ChatroomsController < ApplicationController
  def index
  end

  def create
  end

  def show
    # /chatrooms/:topic/:user
    @chatroom = Chatroom.find_by topic: params[:topic]
    @user = params[:user]
    @message = Message.new
  end
end
