const firebaseConfig = {
      apiKey: "AIzaSyBel7wjWMAi7EcViz1bx9UJvJpkFphihuw",
      authDomain: "kwitter-8215f.firebaseapp.com",
      projectId: "kwitter-8215f",
      storageBucket: "kwitter-8215f.appspot.com",
      messagingSenderId: "65714067055",
      appId: "1:65714067055:web:dbec0e56d042faf2fb1f9a",
      measurementId: "G-5JFSMV8PTW"
    };
    enter_kwitter=localStorage.getItem("enter_kwitter");
    document.getElementById("enter_kwitter").innerHTML="welcome"+enter_kwitter+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    };
function getData() {firebase.database().ref("/").child('value'), function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name="+room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
};
