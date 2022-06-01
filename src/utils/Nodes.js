//Sections
export function Sections() {
  const $ = (id) => document.querySelector(id);
  const headerSection = $("#header");
  const trendingPreviewSection = $("#trendingPreview");
  const CategoriesPreviewSection = $("#categoriesPreview");
  const genericSection = $("#genericList");
  const movieDetailSection = $("#movieDetail");

  return {
    headerSection,
    trendingPreviewSection,
    CategoriesPreviewSection,
    genericSection,
    movieDetailSection,
  };
}

// Lists & Containers
export function ListContainers() {
  const $ = (id) => document.querySelector(id);
  const searchForm = $("#searchForm");
  const trendingMoviesPreviewList = $(".trendingPreview-movieList");
  const categoriesPreviewList = $(".categoriesPreview-list");
  const movieDetailCategoriesList = $("#movieDetail .categories-list");
  const relatedMoviesContainer = $(".relatedMovies-scrollContainer");

  return {
    searchForm,
    trendingMoviesPreviewList,
    categoriesPreviewList,
    movieDetailCategoriesList,
    relatedMoviesContainer,
  };
}

// Elements
export function Elements() {
  const $ = (id) => document.querySelector(id);
  const headerTitle = $(".header-title");
  const arrowBtn = $(".header-arrow");
  const headerCategoryTitle = $(".header-title--categoryView");

  const searchFormInput = $("#searchForm input");
  const searchFormBtn = $("#searchBtn");

  const trendingBtn = $(".trendingPreview-btn");

  const movieDetailTitle = $(".movieDetail-title");
  const movieDetailDescription = $(".movieDetail-description");
  const movieDetailScore = $(".movieDetail-score");

  return {
    headerTitle,
    arrowBtn,
    headerCategoryTitle,
    searchFormInput,
    searchFormBtn,
    trendingBtn,
    movieDetailTitle,
    movieDetailDescription,
    movieDetailScore,
  };
}
