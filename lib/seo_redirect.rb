class SeoRedirect
  USER_AGENT_STRINGS = ['facebookexternalhit/1.1', 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)', 'Facebot']

  def initialize(app)
    @app = app
  end

  def redirect(location)
      [301, {'Location' => location, 'Content-Type' => 'text/html'}, ['seo version']]
  end

  def call(env)
    request = Rack::Request.new(env)
    query_hash = Rack::Utils.parse_query(request.path)
    puts "query_hash: #{query_hash}"
    puts "user agent: #{request.user_agent}"
    puts "params: #{request.params}"

    # puts query_hash
    if USER_AGENT_STRINGS.include?(request.user_agent) 
      puts 'WILL REDIRECT TO SEO STATIC PAGE'
      @app.call(env)
    elsif request.params.has_key?('_escaped_fragment_')
      # should ignore google crawler
        puts 'WILL REDIRECT TO SEO STATIC PAGE'
        redirect("/static/dev#{request.params['_escaped_fragment_']}/page.html")
        # @app.call(env)
    else
      # return redirect(redirects[req.path]) if redirects.include?(req.path)
      @app.call(env)
    end
  end
end
