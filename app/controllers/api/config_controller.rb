module Api
  class ConfigController < ApplicationController

    def index
      
    end

    def allUrls
      @allUrls = [];
      @allUrls << ""

      Quiz.all.find_each do |q|
       @allUrls << "quiz/#{q.url_name}/"
        loop_to = q.max_points
        (0..loop_to).each do |n|
          result_code = ResultEncoder.new(n).encoded
          @allUrls << "quiz/#{q.url_name}/result/#{result_code}"
        end
      end
    end
  end
end
