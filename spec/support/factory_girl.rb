RSpec.configure do |config|
  # ... other FactoryGirl configs
  config.include FactoryGirl::Syntax::Methods
  config.before(:suite) do
    FactoryGirl.reload
    begin
      FactoryGirl.lint
    ensure
     
    end
  end
  config.before(:each) do
    FactoryGirl.reload unless FactoryGirl.factories.blank?
  end
end
