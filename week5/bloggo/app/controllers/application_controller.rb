class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :fetch_user   # check for logged-in user before EVERY controller action

  def fetch_user
    @current_user = User.find session[:user_id] if session[:user_id].present?
    session[:user_id] = nil unless @current_user.present? # make sure we found a user
  end

end
