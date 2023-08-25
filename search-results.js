function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".articles");
  li = ul.querySelectorAll("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const articleTitles = document.querySelectorAll(".article-list h2");

    articleTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            title.parentElement.style.display = "block";
        } else {
            title.parentElement.style.display = "none";
        }
    });
}