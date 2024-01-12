// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
  }
  
  getYear();
  
  // owl carousel initialization
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });
  
// Get all product elements
const products = document.querySelectorAll('.product');

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Display success message
  document.getElementById("successMessage").classList.remove("hidden");

  // You can add code here to send the form data to a server using AJAX or any other method
});

// Start detail

function redirectToDetailPage(detailPageUrl) {
  // Redirect to the detail page
  window.location.href = detailPageUrl;
}



// End detail


// custom.js
document.addEventListener('DOMContentLoaded', function () {
  // Your other initialization code
  
  // Example: Update the displayYear in the footer
  var currentYear = new Date().getFullYear();
  document.getElementById('displayYear').innerText = currentYear;

  // Example: Add event listeners or additional functionality
  var productDetailPage = document.querySelector('.product-detail-section');
  if (productDetailPage) {
      // This code will run only on the product detail page
      // You can add more specific functionality for this page
  }
});

// Add any additional functions or scripts as needed




// Add event listener to each product
products.forEach(product => {
  product.addEventListener('click', () => {
    // Get the product ID or any unique identifier
    const productId = product.dataset.productId;

    // Navigate to the detail page with the product ID
    window.location.href = `/product/${productId}`;
  });
});

  // form submission and AJAX request
  document.querySelector('.form-inline').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const query = document.querySelector('[name="query"]').value;
  
    // Make an AJAX request to the server
    fetch(`/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(results => {
        // Update the UI with the search results
        const searchResultsElement = document.getElementById('search-results');
        searchResultsElement.innerHTML = ''; // Clear previous results
  
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
          searchResultsElement.appendChild(resultItem);
        });
      })
      .catch(error => console.error('Error fetching search results:', error));
  });
  


  // Search

  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
  
    // Sample data for demonstration
    const data = ["Product1", "Product2", "Product3", "Product4", "Product5"];
  
    // Event listener for input changes
    searchInput.addEventListener("input", function () {
      const inputValue = searchInput.value.toLowerCase();
      const filteredData = data.filter(item => item.toLowerCase().includes(inputValue));
      displayResults(filteredData);
    });
  
    // Display autocomplete results
    function displayResults(results) {
      // Clear previous results
      searchResults.innerHTML = "";
  
      // Create and append list items to the results list
      results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
  
        // Handle click on a result item
        listItem.addEventListener("click", function () {
          searchInput.value = result;
          searchResults.style.display = "none"; // Hide results after selection
        });
  
        searchResults.appendChild(listItem);
      });
  
      // Display or hide the results based on the number of items
      searchResults.style.display = results.length > 0 ? "block" : "none";
    }
  
    // Close the autocomplete results when clicking outside the input and results
    document.addEventListener("click", function (event) {
      if (!searchResults.contains(event.target) && event.target !== searchInput) {
        searchResults.style.display = "none";
      }
    });
  });
  