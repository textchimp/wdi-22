require 'rails_helper'

RSpec.describe "Peaches", type: :request do
  describe "GET /peaches" do
    it "works! (now write some real specs)" do
      get peaches_path
      expect(response).to have_http_status(200)
    end
  end
end
