class HomeController < ApplicationController
  def index
    render file: Rails.public_path.join("start.html"), layout: false
  end
end
