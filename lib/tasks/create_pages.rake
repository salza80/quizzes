require 'nokogiri'
require_relative '../scraper'
namespace :static do
  desc 'create dev static pages overwriting all'
  task create_pages_dev_all: :environment do
    scrape_pages('dev', true)
  end

  desc 'create dev static pages (missing pages only)'
  task create_pages_dev_missing: :environment do
    scrape_pages('dev', false)
  end



  def  scrape_pages(env, over_write)
    s = Scraper.new(env)
    s.createFile("/",  { over_write: over_write })
    Quiz.all.find_each do |q|
      s.createFile("quiz/#{q.url_name}/", { over_write: over_write })
      loop_to = q.max_points
      (0..loop_to).each do |n|
        result_code = ResultEncoder.new(n).encoded
        s.createFile("quiz/#{q.url_name}/result/#{result_code}", { over_write: over_write })
      end
    end
    s.quit
  end
end
