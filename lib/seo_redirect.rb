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
    Rails.logger.info "request.path: #{request.path}"
    Rails.logger.info "query_hash: #{query_hash}"
    Rails.logger.info "user agent: #{request.user_agent}"
    Rails.logger.info "params: #{request.params}"
    Rails.logger.info "environment #{ENV["RACK_ENV"]}"
    Rails.logger.info "Content-Type #{request.content_type}"
    staticfolder = ""
    if ENV["RACK_ENV"] == "production"
      staticfolder = "prod"
    elsif ENV["RACK_ENV"]
      staticfolder = "dev"
    end
    # puts query_hash
    if USER_AGENT_STRINGS.include?(request.user_agent) and not request.path.include? "."
      Rails.logger.info 'WILL REDIRECT TO SEO STATIC PAGE'
      redirect("/static/#{staticfolder}#{request.path}/page.html")
    elsif request.params.has_key?('_escaped_fragment_')
      # should ignore google crawler
        Rails.logger.info 'WILL REDIRECT TO SEO STATIC PAGE'
        redirect("/static/#{staticfolder}#{request.params['_escaped_fragment_']}/page.html")
        # @app.call(env)
    else
      # return redirect(redirects[req.path]) if redirects.include?(req.path)
      @app.call(env)
    end
  end
end
