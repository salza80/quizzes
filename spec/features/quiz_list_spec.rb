require 'rails_helper'
require "support/setup_data"

feature 'Quiz List' do
  before(:each) do
    create_quizzes
    create_quizzes
    visit '/'
  end

  scenario 'visits root and gets a list of quizzes' do
    expect(page).to have_text('Test quiz 2')
    quizbuttons = page.all(".panel-footer>a")
    expect(quizbuttons.count).to eq(2)
  end



  scenario 'user selects a quiz from the list' do
    quizbuttons = page.all(".panel-footer>a")
    expect(quizbuttons.count).to eq(2)
    expect(quizbuttons[0]).to have_content("Play Now!")
    quizbuttons[1].click
    expect(page).to have_text('Question 1 of')

  end

  after(:each) do
    Capybara.reset!
  end
end
