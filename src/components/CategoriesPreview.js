import getCategories from "../utils/getCategories";

const CategoriesPreview = async () => {
  const categoriesMovies = await getCategories();
  const categories = categoriesMovies.genres;

  categories.forEach((category) => {
    const categoriesPreviewContainer = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    categoriesPreviewContainer.innerHTML += `
        <div class="category-container">
            <h3 id="id${category.id}" class="category-title">${category.name}</h3>
        </div>`;
  });
};

export default CategoriesPreview;
