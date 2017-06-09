class PagesController < ApplicationController

  def welcome
  end

  def home
    @home_greeting = "YOU ARE HOME"
  end

  def about
    @about = "About My Site"
  end

  def random

    colours = %w{ rebeccapurple gainsboro deeppink hotpink dodgerblue lemonchiffon tomato peachpuff limegreen crimson }
    # ["rebeccapurple", "gainsboro"]

    @colour = colours.sample
  end

end
