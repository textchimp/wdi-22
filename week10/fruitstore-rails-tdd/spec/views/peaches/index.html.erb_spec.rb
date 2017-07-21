require 'rails_helper'

RSpec.describe "peaches/index", type: :view do
  before(:each) do
    assign(:peaches, [
      Peach.create!(
        :name => "Name"
      ),
      Peach.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of peaches" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
