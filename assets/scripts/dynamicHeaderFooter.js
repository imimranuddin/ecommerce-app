// Js code to add header and footer dynamically
// Adds an event listener
document.addEventListener("DOMContentLoaded", function() {

    // to fetch the header.html
    fetch("../components/header.html")

        // converts the response to text format
        .then(response => response.text())
        .then(data => {

            // adding the fetched header. html into the element with the ID "dynamicHeader"
            document.getElementById("dynamicHeader").innerHTML = data;
        });
  });
  
  /// Adds an event listener
  document.addEventListener("DOMContentLoaded", function() {

// to fetch the footer.html
    fetch("../components/footer.html")

        // converts the response to text format and send the data to every element with ID "dynamicFooter"
        .then(response => response.text())
        .then(data => {

            // adding the fetched header. html into the element with the ID "dynamicHeader"
            document.getElementById("dynamicFooter").innerHTML = data;
        });
  });