var config = {
    apiKey: "AIzaSyBXIDOycfOWdyn-NIuJern_pthEJaxkNDg",
    authDomain: "queries-dbaca.firebaseapp.com",
    databaseURL: "https://queries-dbaca.firebaseio.com",
    projectId: "queries-dbaca",
    storageBucket: "queries-dbaca.appspot.com",
    messagingSenderId: "175203074349"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();

    var name= getInputVal('name');
    var nature= getSelection('nature');
    var phone= getInputVal('phone');
    var email= getInputVal('email');
    var message= getInputVal('message');
saveMessage(name,nature,phone,email,message);
document.querySelector('.alert').style.display='block';

setTimeout(function(){
    document.querySelector('.alert').style.display='none';
},3000);
document.getElementById('contactForm').reset();
}
function getInputVal(id){
    return document.getElementById(id).value;
}
function getSelection(id){
    return document.getElementById(id).value;
}
function saveMessage(name,nature,phone,email,message){
var newMessageRef=messagesRef.push();
newMessageRef.set({
name:name,
nature:nature,
phone:phone,
email:email,
message:message
})
}