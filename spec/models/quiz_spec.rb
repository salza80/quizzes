require 'spec_helper'
describe ::Quiz do
  let(:quiz) { FactoryGirl.create :quiz }

  it 'has a valid factory' do
    expect(quiz.title).to eq('Test quiz one')
  end

  it 'should require a title' do
    quiz.title = ''
    quiz.valid?
    expect(quiz.errors[:title].size).to eq(1)
  end
  it 'should require a description' do
    quiz.description = ''
    quiz.valid?
    expect(quiz.errors[:description].size).to eq(1)
  end
  it 'should require a img_url' do
    quiz.img_url = ''
    quiz.valid?
    expect(quiz.errors[:img_url].size).to eq(1)
  end
  it 'should require a url_name' do
    quiz.url_name = ''
    quiz.valid?
    expect(quiz.errors[:url_name].size).to eq(1)
  end
end
