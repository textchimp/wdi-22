require 'rails_helper'

RSpec.describe "peaches/edit", type: :view do
  before(:each) do
    @peach = assign(:peach, Peach.create!(
      :name => "MyString"
    ))
  end

  it "renders the edit peach form" do
    render

    assert_select "form[action=?][method=?]", peach_path(@peach), "post" do

      assert_select "input#peach_name[name=?]", "peach[name]"
    end
  end
end
