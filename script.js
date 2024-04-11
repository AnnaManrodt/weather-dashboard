const searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input').value;
  const formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  
  // Create the url you're sending the user to here. 
  // Tip:  look up location.assign()
  location.assign('search-results.html?search='+ searchInputVal + "&format=" + formatInputVal);

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
