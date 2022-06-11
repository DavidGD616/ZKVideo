import createCategories from "../utils/createCategories";
import {getCategories} from "../utils/getCategories";
import { ListContainers } from "../utils/Nodes";

const CategoriesPreview = async () => {
  const categoriesMovies = await getCategories();
  const categories = categoriesMovies.genres;
  const categoriesPreviewList = ListContainers().categoriesPreviewList;

  createCategories(categories, categoriesPreviewList)
};

export default CategoriesPreview;
