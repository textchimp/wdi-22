class MessagesController < ApplicationController

  def create
    message = Message.new message_params
    message.user = User.find_or_create_by username: params[:message][:user]
    if message.save

      # broadcast the new messageover the websockets channel
      ActionCable.server.broadcast 'messages', message: message.content, user: message.user.username

      head :ok

    else
      redirect_to chatrooms_path
    end
  end

  private
  def message_params
    params.require( :message ).permit( :content, :chatroom_id )
  end

end
