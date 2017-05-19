
console.log('Welcome to the FAI Bank');

// our main bank object
var bank = {

  accounts: [
    {name: "Max", balance: 1000.00 }
  ],

  // Try making accounts into an object to find accounts without looping!
  //
  // accounts: {
  //   "Max": 100.00,
  //   "Edge Lord": 0.01
  //   "Edge-Lord"
  // },
  //
  // this.accounts[name] === undefined

  // return the account object matching the specified name, if found
  getAccount: function( name ){
    for (var i = 0; i < this.accounts.length; i++) {
      var currentAccount = this.accounts[i];
      if( currentAccount.name === name ){
        return currentAccount;
      }
    }//for
    return false;
  },

  addAccount: function( name ){
    // var newAccount = {
    //   name: name,
    //   balance: 0.00
    // };
    // this.accounts.push( newAccount );

    this.accounts.push( {name: name, balance: 0.00} );
    console.log( 'New value of accounts: ', this.accounts );
  }, //addAccount

  deposit: function( name, amount ){

    var account = this.getAccount( name );

    // test for error case: account not found
    if( !account || (typeof amount) !== "number" ){
      return false;
    }

    account.balance += amount;
    return account;

  }, //deposit

  withdraw: function ( name, amount ) {

    var account = this.getAccount( name );

    // test for error case: account not found
    if( !account || (typeof amount) !== "number" ){
      return false;
    }

    if( (account.balance - amount) < 0 ){
      return {error: "Insufficient funds"};
    }

    account.balance -= amount;
    return account;

  }//withdraw

};  // end of main bank object


bank.addAccount( "Edgedawg" );

console.log( 'getAccount("Max"):', bank.getAccount("Max") );
console.log( 'getAccount("AGHSDGKYAGF"):', bank.getAccount("AGHSDGKYAGF") );

console.log( 'Add $100.00 to Edgedawg although he does not deserve it',
             bank.deposit('Edgedawg', 100.00) );

console.log( 'Withdraw $50.00 from Edgedawg, expect new balance of $50.00',
             bank.withdraw('Edgedawg', 50.00) );

console.log( 'Withdraw $100.00 from Edgedawg, expect error object',
             bank.withdraw('Edgedawg', 100.00) );
