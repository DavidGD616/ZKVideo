import getCategories from "../utils/getCategories";
import { ListContainers } from "../utils/Nodes";

const CategoriesPreview = async () => {
  const categoriesMovies = await getCategories();
  const categories = categoriesMovies.genres;

  const categoriesPreviewList = ListContainers().categoriesPreviewList;

  categoriesPreviewList.innerHTML = "";

  categories.forEach(category => {  
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  });
};

export default CategoriesPreview;
