require 'nokogiri'
require_relative '../scraper'
namespace :static do
  desc 'create static pages'
  task create_pages: :environment do
    #example scraper usage.
    s = Scraper.new('dev')

    s.createFile "quiz/my_first_quiz/"
    s.createFile "quiz/my_first_quiz/result/NQ=="

    s.quit
  end
end
