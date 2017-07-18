namespace :db do

  desc "Drop, create, migrate and seed the database"
  task :regenerate do
    puts "Regenerating DB..."
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end

end
