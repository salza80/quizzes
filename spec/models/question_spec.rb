require 'spec_helper'
require "support/setup_data"
describe ::Question do
  let(:question) { create :question, title: 'Test question 1' }

  it 'has a valid factory' do
    expect(question.title).to eq('Test question 1')
  end

  it 'should require a title' do
    question.title = ''
    question.valid?
    expect(question.errors[:title].size).to eq(1)
  end
  it 'should require a order_by' do
    question.order_by = ''
    question.valid?
    expect(question.errors[:order_by].size).to eq(1)
  end
  it 'should return the max points' do
    create_quizzes
    q =Question.all.first
    expect(q.max_points).to eq(1)

  end
end
