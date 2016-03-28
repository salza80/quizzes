require "rails_helper"
require "support/setup_data"

RSpec.describe Api::QuizzesController, :type => :controller do
  before :each do
    request.env["HTTP_ACCEPT"] = 'application/json'
  end


  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "loads all of the quizzes into @quizzes" do
      create_quizzes
      get :index
      @q = Quiz.all
      expect(assigns(:quizzes)).to match_array(@q)
    end
  end

  describe "GET #show" do
    before(:each) do
      create_quizzes
    end
    it "responds successfully with an HTTP 200 status code" do
      get :show, {url_name: 'test_quiz_1'}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
    it "responds 404 not found  with non existant quiz" do
      get :show, {url_name: 'does not exist'}
      expect(response).to have_http_status(:missing)
    end

    it "renders the show template" do
      get :show, {url_name: 'test_quiz_1'}
      expect(response).to render_template("show")
    end

    it "loads all of the quiz by url_name" do
      @q = Quiz.all.first
      get :show , {url_name: @q.url_name}
      expect(assigns(:quiz)).to match(@q)
    end
  end

  describe "GET #result_code" do
    it "responds successfully with an HTTP 200 status code" do
      get :result_code, {points: '3'}
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the result_code template" do
      get :result_code, {points: '3'}
      expect(response).to render_template("result_code")
    end
  end

  describe "GET #outcome" do
    before(:each) do
      create_quizzes
    end
    it "responds successfully with an HTTP 200 status code" do
      get :outcome, {url_name: 'test_quiz_1', result_code: 'Mw=='}

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the outcome template" do
      # Mw== is 3
      get :result_code, {url_name: 'test_quiz_1', result_code: "Mw=="}
      expect(response).to render_template("result_code")
    end
  end
end
