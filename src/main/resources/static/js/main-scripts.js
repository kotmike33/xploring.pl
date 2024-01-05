    var map = L.map('map', { zoomControl: false, minZoom: 6 }).setView([51.9752, 18.8751 - 0.01], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers = L.layerGroup().addTo(map);
    L.control.zoom({ position: 'topright' }).addTo(map);

  function createLiElement(result) {
      const li = document.createElement("div");
      li.className = "search-result";

      const titleElement = document.createElement("h3");
      titleElement.textContent = result.title;

      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${result.author}`;

      li.appendChild(titleElement);
      li.appendChild(authorElement);

      return li;
  }


  document.addEventListener('DOMContentLoaded', function() {
      var searchButton = document.getElementById('search-button');

      searchButton.addEventListener('click', function() {
          var query = document.getElementById("main-search-input").value;

          fetch("/xploring.pl/api/search?query=" + query)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return response.json();
              })
              .then(data => {
                  var searchResultsContainer = document.getElementById("search-results");
                  searchResultsContainer.innerHTML = "";

                  if (data.results && Array.isArray(data.results)) {
                      var ul = document.createElement("ul");
                      data.results.forEach(function(result) {
                          var li = createLiElement(result);
                          ul.appendChild(li);
                      });
                      searchResultsContainer.appendChild(ul);
                  } else {
                       var ul = document.createElement("ul");
                       var li = createLiElement({
                           id: 1,
                           title: "Error :<",
                           author: "Error :<"
                       });

                       ul.appendChild(li);
                       searchResultsContainer.appendChild(ul);
                  }
              })

              .catch(error => {
                  console.error("Error occurred: " + error);
              });
      });
  });




    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        var sidebarHandle = document.getElementById('sidebar-handle');

        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-500px';
            sidebarHandle.style.left = '497px';
            sidebarHandle.style.backgroundImage = 'url("/xploring.pl/images/right.png")';
        } else {
            sidebar.style.left = '0';
            sidebarHandle.style.left = '497px';
            sidebarHandle.style.backgroundImage = 'url("/xploring.pl/images/left.png")';
        }
    }

    document.getElementById('menuButton').addEventListener('click', function () {
        toggleSidebar();
    });

    function displaySearchResults(results) {
        var searchResultsContainer = document.getElementById("search-results");
        searchResultsContainer.innerHTML = "";

        if (results.length == 0) {
            searchResultsContainer.innerText = "No results.";
        } else {
            var ul = document.createElement("ul");
            results.forEach(function(result) {
                var li = document.createElement("li");
                li.textContent = result;
                ul.appendChild(li);
            });
            searchResultsContainer.appendChild(ul);
        }
    }

