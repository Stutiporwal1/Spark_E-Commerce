document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.querySelector('select[name="category"]');
  const brandSelect = document.querySelector('select[name="brand"]');
  const ratingSelect = document.querySelector('select[name="rating"]');
  const productCards = document.querySelectorAll(".product-card");

  function filterProducts() {
    const selectedCategory = categorySelect?.value || "None";
    const selectedBrand = brandSelect?.value || "None";
    const selectedRating = ratingSelect?.value || "None";

    productCards.forEach(card => {
      const cardCategory = card.dataset.category;
      const cardBrand = card.dataset.brand;
      const cardRating = card.dataset.rating;

      const matchCategory = selectedCategory === "None" || selectedCategory === cardCategory;
      const matchBrand = selectedBrand === "None" || selectedBrand === cardBrand;
      const matchRating = selectedRating === "None" || selectedRating === cardRating;

      if (matchCategory && matchBrand && matchRating) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  [categorySelect, brandSelect, ratingSelect].forEach(select => {
    if (select) {
      select.addEventListener("change", filterProducts);
    }
  });

  // Initial call to show all products on page load
  filterProducts();
});
