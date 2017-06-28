class MessagesController < ApplicationController

  def index
    @messages = Message.all
    # raise 1
  end

  def show
    @message = Message.find_by id: params[:id]
  end
end
