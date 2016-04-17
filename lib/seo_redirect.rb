class SeoRedirect
  USER_AGENT_STRINGS = ['facebookexternalhit/1.1', 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)', 'Facebot']

  def initialize(app)
    @app = app
  end

  def redirect(location)
      [301, {'Location' => location, 'Content-Type' => 'text/html'}, ['seo version']]
  end

  def serveFile(file)
    if File.exists?(file)
      f = File.read(file)
      Rails.logger.info file
      [200, {'Content-Type' => 'text/html'}, [File.read(file)]]
    else
      [404, {'Content-Type' => 'text/html'}, ['Not Found']] 
    end

  end

  def call(env)
    request = Rack::Request.new(env)
    # query_hash = Rack::Utils.parse_query(request.path)
    # Rails.logger.info "request.path: #{request.path}"
    # Rails.logger.info "query_hash: #{query_hash}"
    # Rails.logger.info "user agent: #{request.user_agent}"
    # Rails.logger.info "params: #{request.params}"
    # Rails.logger.info "environment #{ENV["RACK_ENV"]}"
    # Rails.logger.info "Content-Type #{request.content_type}"

    staticfolder = ""
    if ENV["RACK_ENV"] == "production"
      staticfolder = "prod"
    elsif ENV["RACK_ENV"]
      staticfolder = "dev"
    end
    if USER_AGENT_STRINGS.include?(request.user_agent) and not request.path.include? "."
      Rails.logger.info 'LOAD SEO STATIC PAGE'
      # redirect("/static/#{staticfolder}#{request.path}/page.html")
      serveFile("public/static/#{staticfolder}#{request.path}/page.html")

    elsif request.params.has_key?('_escaped_fragment_')
      # should ignore google crawler ??
        Rails.logger.info 'LOAD SEO STATIC PAGE'
        serveFile("public/static/#{staticfolder}#{request.params['_escaped_fragment_']}/page.html")
    else
      @app.call(env)
    end
  end
end
