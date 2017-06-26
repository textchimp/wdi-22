
require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new "TDD Bank" }

  describe ".new" do

    it "creates a new bank object" do
      expect( bank ).to_not eq nil
    end

    it "assigns the bank a name" do
      expect( bank.name ).to eq "TDD Bank"   # bank.name == bank_name ?
    end

    it "starts with no accounts" do
      expect( bank.accounts.count ).to eq 0
    end

  end  # .new

  describe "#create_account" do
    it "creates an account with the given name" do
      bank.create_account "Jonesy Craigsy", 0
      expect( bank.accounts["Jonesy Craigsy"] ).to_not eq nil
    end

    it "initialises the given account with some starting deposit" do
      bank.create_account "Jonesy Craigsy", 200.00
      expect( bank.accounts["Jonesy Craigsy"] ).to eq 200.00
    end
  end  # #create_account

  describe "#deposit" do
    it "deposits an amount into the account of the given customer" do
      bank.create_account "Jonesy Craigsy", 200.00
      bank.deposit "Jonesy Craigsy", 300.00

      expect( bank.accounts["Jonesy Craigsy"] ).to eq 500.00
    end
  end

  describe "#withdraw" do
    it "withdraws an amount from the given customer's account" do
      bank.create_account "Dazza", 200.00
      bank.withdraw "Dazza", 50.00

      expect( bank.accounts["Dazza"] ).to eq 150.00
    end

    it "ignores withdrawals that exceed the account's balance" do
      bank.create_account "Dazza", 200.00
      bank.withdraw "Dazza", 500.00

      expect( bank.accounts["Dazza"] ).to eq 200.00
    end
  end

  describe "#balance" do
    it "returns the current balance for a given account" do
      bank.create_account "Bazza", 200.00
      expect( bank.balance("Bazza") ).to eq 200.00
    end

  end



end # Bank
