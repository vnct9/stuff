function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setTtem("user_name", user_name);

     window.location = "kwitter_room.html";
}
