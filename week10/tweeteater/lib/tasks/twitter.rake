namespace :twitter do

  desc "Remove all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  desc "Get stats about current user and tweet count"
  task :stats => :environment do
    puts "Current users:  #{ User.all.length }"
    puts "Current tweets: #{ Tweet.all.length }"
  end

  desc "Create a new user with a random number of tweets"
  task :create_user => :environment do
    FactoryGirl.create :user_with_tweets
    Rake::Task['twitter:stats'].invoke
  end

  desc "Create a specified number of users with a random number of tweets"
  task :create_users, [:user_count, :tweets] => :environment do |t, args|
    # puts "Count:  #{ args[:user_count] }"
    # puts "Tweets: #{ args[:tweets]     }"
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end




end
