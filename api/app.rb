require 'sinatra'
require 'mongo'
require 'json/ext'

include Mongo

configure do
  conn = MongoClient.new(ENV['MONGO_DB_HOST'] || 'localhost', ENV['MONGO_DB_PORT'] || 27017)
  set :mongo_connection, conn
  set :mongo_db, conn.db('human_experiment')
end

post '/reports/?' do
  content_type :json
  new_id = settings.mongo_db['reports'].insert params
  document_by_id(new_id)
end
