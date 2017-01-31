

function setStatus1(message) {
  var status = document.getElementById("status1");
  status.innerHTML = message;
};

function setStatus2(message) {
  var status = document.getElementById("status2");
  status.innerHTML = message;
};






function login() {
  var user = UserDatabase.deployed();

  var publickey = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  setStatus("Initiating login... (please wait)");

  user.verifyUser(publickey, password).then(function() {
    setStatus("You're now logged in");
 
  }).catch(function(e) {
    console.log(e);
    setStatus1("Error logging in");
  });
};



function register() {
  var user = UserDatabase.deployed();

  var publickey = document.getElementById("username").value;
  //var privatekey = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  setStatus("Initiating registration... (please wait)");

  user.addUser(publickey, password).then(function() {
    setStatus("Registration complete!");
   
  }).catch(function(e) {
    console.log(e);
    setStatus2("Error registering");
  });
};




function newloan() {
  var loan = Loans.deployed();

  var title = document.getElementById("title").value;
  var appeal = document.getElementById("comment").value;
  var amount = parseInt(document.getElementById("amount").value);


  loan.newLoan(title, appeal,amount).then(function() {
    setStatus2("Appeal Successful");
 
  }).catch(function(e) {
    console.log(e);
    setStatus2("Error request");
  });

};


function payment() {

  var loan = Loans.deployed();
user.contribute(loan.id, {value: <value here>, from : web3.eth.defaultAccount,
gas: 1000000});

};










