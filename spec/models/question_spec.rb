require 'spec_helper'
describe ::Question do
  let(:question) { FactoryGirl.create :question }

  it 'has a valid factory' do
    expect(question.title).to eq('Test question one')
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
end
