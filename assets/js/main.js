
//Check login status
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

//Login button
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
