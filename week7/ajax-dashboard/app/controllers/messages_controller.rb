class MessagesController < ApplicationController

  def index
    @messages = Message.all

    respond_to do |format|
      format.html {}
      format.json {  render json: @messages }
    end

  end
  #
  # def index_api
  #   messages = Message.all
  #   render json: messages
  # end

  def show
    @message = Message.find_by id: params[:id]

    respond_to do |format|
      format.html {}
      format.json {  render json: @message }
    end

  end
end
