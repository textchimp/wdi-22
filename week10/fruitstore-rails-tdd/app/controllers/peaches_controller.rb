class PeachesController < ApplicationController
  before_action :set_peach, only: [:show, :edit, :update, :destroy]

  # GET /peaches
  # GET /peaches.json
  def index
    @peaches = Peach.all
  end

  # GET /peaches/1
  # GET /peaches/1.json
  def show
  end

  # GET /peaches/new
  def new
    @peach = Peach.new
  end

  # GET /peaches/1/edit
  def edit
  end

  # POST /peaches
  # POST /peaches.json
  def create
    @peach = Peach.new(peach_params)

    respond_to do |format|
      if @peach.save
        format.html { redirect_to @peach, notice: 'Peach was successfully created.' }
        format.json { render :show, status: :created, location: @peach }
      else
        format.html { render :new }
        format.json { render json: @peach.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /peaches/1
  # PATCH/PUT /peaches/1.json
  def update
    respond_to do |format|
      if @peach.update(peach_params)
        format.html { redirect_to @peach, notice: 'Peach was successfully updated.' }
        format.json { render :show, status: :ok, location: @peach }
      else
        format.html { render :edit }
        format.json { render json: @peach.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /peaches/1
  # DELETE /peaches/1.json
  def destroy
    @peach.destroy
    respond_to do |format|
      format.html { redirect_to peaches_url, notice: 'Peach was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_peach
      @peach = Peach.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def peach_params
      params.require(:peach).permit(:name)
    end
end
