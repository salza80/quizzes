require 'spec_helper'
describe ::Answer do
  let(:answer) { FactoryGirl.create :answer }

  it 'has a valid factory' do
    expect(answer.title).to eq('Test answer one')
  end

  it 'should require a title' do
    answer.title = ''
    answer.valid?
    expect(answer.errors[:title].size).to eq(1)
  end
  it 'should require a order_by' do
    answer.order_by = ''
    answer.valid?
    expect(answer.errors[:order_by].size).to eq(1)
  end
  it 'should require points' do
    answer.points = ''
    answer.valid?
    expect(answer.errors[:points].size).to eq(1)
  end
end
