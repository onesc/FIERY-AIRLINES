json.array!(@flights) do |flight|
  json.extract! flight, :id, :name, :origin, :destination, :departure, :plane_id
  json.url flight_url(flight, format: :json)
end
