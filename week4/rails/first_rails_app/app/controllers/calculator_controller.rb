class CalculatorController < ApplicationController

  def do_calc

    # raise 'hell'

    @x = params["x"].to_f
    @y = params["y"].to_f
    @op = params["operator"]

    if @op == "divide"
      @result = @x / @y
    else
      @result = @x.send( @op, @y )
    end

    #
    # @result = case @operator
    #       when "+" then @x + @y
    #       when "-" then @x - @y
    #       when "*" then @x * @y
    #       when "divide" then @x / @y
    #       end

  end

end
