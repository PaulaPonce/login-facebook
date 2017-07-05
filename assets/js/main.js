//Facebok SDK
window.fbAsyncInit = function() {
  FB.init({
    appId : '314153372362694',
    cookie : true,
    xfbml : true,
    version : 'v2.8'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=314153372362694";
  fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk'));

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
