require 'spec_helper'
describe ::Outcome do
  let(:outcome) { create :outcome, title: 'Test outcome 1', points_to: 2}

  it 'has a valid factory' do
    expect(outcome.title).to eq('Test outcome 1')
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
  it 'should find outcome by find_by_points' do
    create :outcome, title: 'Test outcome 1', points_to: 2
    create :outcome, title: 'Test outcome 2', points_to: 5
    found = Outcome.find_by_points(1)
    expect(found.title).to eq('Test outcome 1')
  end
  it 'should find outcome by find_by_points including points' do
    create :outcome, title: 'Test outcome 1', points_to: 2
    create :outcome, title: 'Test outcome 2', points_to: 5
    found = Outcome.find_by_points(5)
    expect(found.title).to eq('Test outcome 2')
  end
end
