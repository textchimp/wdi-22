require 'rails_helper'

RSpec.describe "peaches/show", type: :view do
  before(:each) do
    @peach = assign(:peach, Peach.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
