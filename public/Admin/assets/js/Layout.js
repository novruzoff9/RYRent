$('#menubtn').click(toggleSideBar);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "b") {
    event.preventDefault(); // Varsayılan tarayıcı kısayolunu engelle
    toggleSideBar();
  }
});

function toggleSideBar(){
  $('aside').toggleClass('mini-show');
  $('header').toggleClass('show-more');
  $('#content').toggleClass('show-more');
}
$('#notficiationsbtn').click(function () {
  $("#profile-menu").hide();
  $('#notficiations-menu').toggle();
});

$("#user-data").click(showProfile);
document.addEventListener("keydown", function(event){
  if(event.ctrlKey && event.key === "p"){
    event.preventDefault();
    showProfile();
  }
});

function showProfile(){
  $("#notficiations-menu").hide();
  $("#profile-menu").toggle();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "/") {
    event.preventDefault(); // Bu, `/` tuşuna basıldığında varsayılan davranışı (örn. arama yapma) engeller.
    document.getElementById("fullsearch").focus();
  }
});