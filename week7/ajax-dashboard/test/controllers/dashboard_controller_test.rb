require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get info" do
    get dashboard_info_url
    assert_response :success
  end

end
