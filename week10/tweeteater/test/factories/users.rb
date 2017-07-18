FactoryGirl.define do

  factory :user do |f|
    # email Faker::Internet.email
    # name Faker::Name.name_with_middle

    # Make sure that each new user we create gets a new name and email address
    f.sequence( :email ){ Faker::Internet.email }
    f.sequence( :name  ){ Faker::Name.name_with_middle }

    # Create a sub-factory which also does what its parent factory does
    # (i.e. create a user), but then also creates tweets for that user afterwards
    factory :user_with_tweets do
      after(:create) do |u|
        # When we've finished making a user
        FactoryGirl.create_list :tweet, Random.rand(10..200), :user => u
      end
    end # :user_with_tweets

  end   # :user


end
