require 'selenium-webdriver'
require 'fileutils'
require 'nokogiri'

class Scraper
  SETTINGS = {dev: {
                      domain_url: "http://localhost:3000/",
                      output_dir: "public/static/dev/"
                    },
              prod: {
                      domain_url: "http://mydomain.com/",
                      output_dir: "public/static/dev/"
                    }
              }

  def initialize(env)
    @driver = Selenium::WebDriver.for :firefox
    @env=env
    @locations = SETTINGS[env.to_sym]
    setupdir
  end

  def createFile(url)
    page_source = getPage(url)
    FileUtils::mkdir_p("#{@fileDir}#{url}")
    output = File.new("#{@fileDir}#{url}/page.html", "w")
    output.puts(page_source)
    output.close
  end 

  def quit
    @driver.quit
  end

  private

  def removeScripts(page_source)
    nkpage = Nokogiri::HTML(page_source)
    nkpage.css('script').each do |element|
      element.unlink
    end
    nkpage.to_html
  end

  def getPage(url)
    @driver.get("#{@locations[:domain_url]}#{url}")
    page_source = @driver.page_source
    page_source = removeScripts(page_source)
    page_source
  end

  def setupdir
    @fileDir = File.join(Rails.root, @locations[:output_dir])
    FileUtils::mkdir_p(@fileDir)
  end
end