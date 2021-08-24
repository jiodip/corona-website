// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCz8kigEUOp2CYJ_LwSThwVRa9DTQZ-rCE",
    authDomain: "corona-web-6f3f2.firebaseapp.com",
    databaseURL: "https://corona-web-6f3f2-default-rtdb.firebaseio.com",
    projectId: "corona-web-6f3f2",
    storageBucket: "corona-web-6f3f2.appspot.com",
    messagingSenderId: "484406493394",
    appId: "1:484406493394:web:d90a2f99109936c251ed0b",
    measurementId: "G-FJDEKM3D79"
  };
  firebase.initializeApp(firebaseConfig)
userref=firebase.database().ref("user input")
document.getElementById("testForm").addEventListener ("submit",submitbutton)
function submitbutton(e){
    e.preventDefault()
    f=document.getElementById ("firstname").value
    l=document.getElementById ("lastname").value
    k=document.getElementById ("mobile").value
    a=document.getElementById ("dateofbirth").value
    d=document.getElementById ("email").value
    g=document.getElementById ("profession").value
    o=document.getElementById ("state").value
    u=document.querySelector ("input[type=radio]:checked").value
    m=getsim()
    sent(f+l,k,a,d,g,o,u,m)
    read(o)
    alert("submmited")
}
function getsim(){
    b=document.querySelectorAll("input[type=checkbox]:checked")
    v=[]
    b.forEach((data)=>{v.push(data.value)})
   return v 

}
function sent (f,k,a,d,g,o,u,m) {
    newref=userref.push()

newref.set({name:f,mobile:k,dob:a,email:d,occupation:g,state:o,travelhistory:u,symptoms:m})}
function read (state){iref=firebase.database().ref(state)
c=""
iref.on("value",(data)=>{c=data.val()
document.getElementById ("ji").innerHTML="corona centers near you:"+c})}

