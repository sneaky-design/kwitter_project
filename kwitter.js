function adduser(){
user_name=document.getElementById("enter_kwitter").Value;
localStorage.setItem("user_name", user_name);
window.location="kwitter_room.html"
}