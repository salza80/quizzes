RSpec.configure do |config|
  # ... other FactoryGirl configs
  config.include FactoryGirl::Syntax::Methods
  config.before(:suite) do
    FactoryGirl.reload
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
    begin
      DatabaseCleaner.start
      FactoryGirl.lint
    ensure
      DatabaseCleaner.clean
    end
  end
  config.before(:each) do
    FactoryGirl.reload unless FactoryGirl.factories.blank?
  end
end




