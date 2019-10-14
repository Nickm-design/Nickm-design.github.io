document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mainHeader").onclick = function() {
    this.style.color = 'red'
  }
})
$( document ).ready(function() {
  $( "#FadeOut" ).click(function() {
    $( "#FadeOut" ).fadeOut( "slow", function() {
    });
  });
});