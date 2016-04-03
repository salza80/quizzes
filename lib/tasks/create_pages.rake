require 'net/http'
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

  desc 'create prod static pages overwriting all'
  task create_pages_prod_all: :environment do
    scrape_pages('prod', true)
  end

  desc 'create prod static pages (missing pages only)'
  task create_pages_prod_missing: :environment do
    scrape_pages('prod', false)
  end

  def getURLS(env)
    if(env == 'prod')
      url = URI.parse('http://quizzes1.herokuapp.com/api/config/allUrls.json')
    else
      url = URI.parse('http://localhost:3000/api/config/allUrls.json')
    end
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }
    JSON.parse(res.body)
  end


  def  scrape_pages(env, over_write)
    urls = getURLS(env)
    s = Scraper.new(env)
    urls.each do |q|
      s.createFile(q['url'], { over_write: over_write })
    end
    s.quit
  end
end
