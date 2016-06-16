class FlightsController < ApplicationController
  before_action :set_flight, only: [:show]

  def index
    @flights = Flight.all
    render json: @flights
  end

  def show
    render json: @flights
  end

  private

  def set_flight
    @flight = Flight.find(params[:id])
  end
end
