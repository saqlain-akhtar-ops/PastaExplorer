// =========================================
// Pasta Explorer - Basic JavaScript
// Member 3: Search, Filter, and Recipe Toggle
// =========================================

// Get elements from the Pasta Types page
var searchInput = document.getElementById("searchInput");
var categorySelect = document.getElementById("categorySelect");
var pastaCards = document.querySelectorAll(".pasta-card");
var noResultsMsg = document.getElementById("noResultsMsg");

// Function to filter pasta cards by search text and category dropdown
function filterPasta() {
    var searchText = searchInput.value.toLowerCase();
    var selectedCategory = categorySelect.value;
    var visibleCount = 0;

    // Loop through each pasta card
    for (var i = 0; i < pastaCards.length; i++) {
        var card = pastaCards[i];
        var pastaName = card.querySelector(".pasta-name").textContent.toLowerCase();
        var pastaCategory = card.getAttribute("data-category");

        // Check if card matches search box and category dropdown
        var matchesSearch = pastaName.indexOf(searchText) !== -1;
        var matchesCategory = (selectedCategory === "All" || pastaCategory === selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    }

    // Show message if no pasta matches
    if (noResultsMsg) {
        if (visibleCount === 0) {
            noResultsMsg.style.display = "block";
        } else {
            noResultsMsg.style.display = "none";
        }
    }
}

// Add event listeners if we are on the Pasta Types page
if (searchInput && categorySelect) {
    searchInput.addEventListener("input", filterPasta);
    searchInput.addEventListener("keyup", filterPasta);
    categorySelect.addEventListener("change", filterPasta);
}

// Function to show or hide recipe ingredients and steps on the Recipes page
function toggleRecipe(recipeId) {
    var detailsDiv = document.getElementById(recipeId);
    if (detailsDiv) {
        if (detailsDiv.style.display === "none") {
            detailsDiv.style.display = "block";
        } else {
            detailsDiv.style.display = "none";
        }
    }
}
