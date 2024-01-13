var updateLink = document.querySelector('.updates a');

updateLink.addEventListener('click', function(event) {
  event.preventDefault();
  
  var updatesSection = document.querySelector('.first-update');
  updatesSection.innerHTML = '<p>Website is now live!</p>';
});