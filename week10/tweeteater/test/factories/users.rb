FactoryGirl.define do

  factory :user do |f|
    # email Faker::Internet.email
    # name Faker::Name.name_with_middle

    f.sequence( :email ){ Faker::Internet.email }
    f.sequence( :name  ){ Faker::Name.name_with_middle }

    factory :user_with_tweets do
      after(:create) do |u|
        FactoryGirl.create_list :tweet, Random.rand(10..200), :user => u
      end
    end # :user_with_tweets

  end   # :user


end
