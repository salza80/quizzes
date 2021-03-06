require "rails_helper"
# require "support/setup_data"

RSpec.describe HomeController, :type => :controller do
  # before :each do
  #   request.env["HTTP_ACCEPT"] = 'application/json'
  # end


  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    # it "renders the index template" do
    #   get :index
    #   expect(response).to render_template("index")
    # end

  end
end
