var name1 = document.getElementById('name1');
var email1 = document.getElementById('email1');
var password1 = document.getElementById('password1');
var register = document.getElementById('register');
function reg() {
  var key = firebase.database().ref('user').push().key;
  var a = {
    username: name1.value,
    email: email1.value,
    password: password1.value,
    key: key
  }
  firebase.database().ref('user').child(key).set(a)
  alert("Successfully Registered!")
  name1.value = "";
  email1.value = "";
  password1.value = "";
}


var submit = document.getElementById("submit");
var email = document.getElementById("email");
var password = document.getElementById("password");
function sub() {
  if (email.value == "osama" && password.value == "osama") {
    alert("Login Successfull");
    // window.open("home.html");
    window.location.replace("home.html")
  } else if (email.value == "" && password.value == "") {
    alert("Please Enter Field")
  }
  else {
    alert("“Incorrect Details”");
  }
}

var name2 = document.getElementById('name2');
var cnic = document.getElementById('cnic');
var mobile = document.getElementById('mobile');
var email3 = document.getElementById('email3');
var trainname = document.getElementById('trainname');
var start = document.getElementById('start');
var destination = document.getElementById('destination');
var date = document.getElementById('date');
var ticket = document.getElementById('ticket');
function submitted() {
  if (document.getElementById("name2").value.length === 0 || document.getElementById("cnic").value.length === 0
    || document.getElementById("mobile").value.length === 0 || document.getElementById("email3").value.length === 0
    || document.getElementById("start").value.length === 0
    || document.getElementById("destination").value.length === 0 || document.getElementById("ticket").value.length === 0){
    alert("Please enter fields");
    return false;
  }
    var key = firebase.database().ref('info').push().key;
    var cc = {
      name: name2.value,
      cnicc: cnic.value,
      mob: mobile.value,
      email4: email3.value,
      trainn: trainname.value,
      des: destination.value,
      datee: date.value,
      tick: ticket.value,
      key: key
    }
    firebase.database().ref('info').child(key).set(cc)
    alert("Successfully Registered" + "\n" + "Ticket and Payment Details send to their Email")
    name2.value = "";
    cnic.value = "";
    mobile.value = "";
    email3.value = "";
    trainname.value = "";
    destination.value = "";
    date.value = "";
    ticket.value = "";
  }



  function allin() {
    firebase.database().ref('info').on('child_added', function (data) {
      alert("name: " + data.val().name + "\n" + "CNIC " + data.val().cnicc + "\n" + "Cell: " + data.val().mob + "\n" + "Email: " + data.val().email4 + "\n" +
        "Train_Name: " + data.val().trainn + "\n" + "Destination: " + data.val().des + "\n" + "Date: " + data.val().datee + "\n" +
        "No. of Tickets: " + data.val().tick + "\n")
    }
    )
  }
