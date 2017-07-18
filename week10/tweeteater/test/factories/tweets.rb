FactoryGirl.define do
  factory :tweet do |f|
    # content "MyText"
    # user_id 1

    f.sequence( :content ){ Faker::Lovecraft.sentence(2)  }

  end
end
