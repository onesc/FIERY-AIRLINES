json.array!(@planes) do |plane|
  json.extract! plane, :id
  json.url plane_url(plane, format: :json)
end
