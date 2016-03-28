# class SeoRedirect
#   def initialize(app)
#     @app = app
#   end
  
#   def call(env)
#     status, headers, response = @app.call(env)
#     [status, headers, "hello world"]
#     if headers["Content-Type"].include? "text/html"
#       [status, headers, "<!-- TESTING -->\n" + response.body]
#     else
#       [status, headers, response]
#     end
#   end
# end


class SeoRedirect
  def initialize(app)
    @app = app
  end

  def redirect(location)
      [301, {'Location' => location, 'Content-Type' => 'text/html'}, ['seo version']]
  end

  def call(env)
    request = Rack::Request.new(env)
    query_hash = Rack::Utils.parse_query(request.path) 
    puts query_hash
    if query_hash.has_key?('_escaped_fragment_')
        puts 'REDIRECT TO SEO STATIC PAGE'
    else
      # return redirect(redirects[req.path]) if redirects.include?(req.path)
      @app.call(env)
    end
  end
end
