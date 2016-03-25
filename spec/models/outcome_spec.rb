require 'spec_helper'
describe ::Outcome do
  let(:outcome) { FactoryGirl.create :outcome }

  it 'has a valid factory' do
    expect(outcome.title).to eq('Test outcome one')
  end

  it 'should require a title' do
    outcome.title = ''
    outcome.valid?
    expect(outcome.errors[:title].size).to eq(1)
  end
  it 'should require a order_by' do
    outcome.order_by = ''
    outcome.valid?
    expect(outcome.errors[:order_by].size).to eq(1)
  end
  it 'should require points_to' do
    outcome.points_to = ''
    outcome.valid?
    expect(outcome.errors[:points_to].size).to eq(1)
  end
end
