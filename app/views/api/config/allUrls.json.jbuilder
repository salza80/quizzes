json.array! @allUrls do |url|
  json.partial! 'api/config/url', url: url
end
