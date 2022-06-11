import TrendingMoviesPreview from "./components/TrendingMoviesPreview";
import CategoriesPreview from "./components/CategoriesPreview";
import MoviesByCategory from "./components/MoviesByCategory"
import { Sections, ListContainers, Elements } from "./utils/Nodes";

//Sections
const headerSection = Sections().headerSection;
const trendingPreviewSection = Sections().trendingPreviewSection;
const CategoriesPreviewSection = Sections().CategoriesPreviewSection;
const genericSection = Sections().genericSection;
const movieDetailSection = Sections().movieDetailSection;

//Lists & Containers
const searchForm = ListContainers().searchForm;
const trendingMoviesPreviewList = ListContainers().trendingMoviesPreviewList;
const categoriesPreviewList = ListContainers().categoriesPreviewList;
const movieDetailCategoriesList = ListContainers().movieDetailCategoriesList;
const relatedMoviesContainer = ListContainers().relatedMoviesContainer;

//Elements
const headerTitle = Elements().headerTitle;
const arrowBtn = Elements().arrowBtn;
const headerCategoryTitle = Elements().headerCategoryTitle;
const searchFormInput = Elements().searchFormInput;
const searchFormBtn = Elements().searchFormBtn;
const trendingBtn = Elements().trendingBtn;
const movieDetailTitle = Elements().movieDetailTitle;
const movieDetailDescription = Elements().movieDetailDescription;
const movieDetailScore = Elements().movieDetailScore;

searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends'
});

arrowBtn.addEventListener('click', () => {
  location.hash = '#home';
})

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }

  window.scrollTo(0, 0);
}


function homePage() {
  console.log("Home!!");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove("inactive");
  CategoriesPreviewSection.classList.remove("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");

  TrendingMoviesPreview();
  CategoriesPreview();
}

function categoriesPage() {
  console.log("categories!!");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  CategoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

   // ['#category', 'id-name'];
  const [_, categoryData ] = location.hash.split('=');
  const [categoryId, categoryName] = categoryData.split('-');
  const newCategoryName = decodeURI(categoryName);

  headerCategoryTitle.innerHTML = newCategoryName;


  MoviesByCategory(categoryId, newCategoryName);
}

function movieDetailsPage() {
  console.log("Movie!!");
  headerSection.classList.add("header-container--long");
  // headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  CategoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");
}

function searchPage() {
  console.log("Search!!");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  CategoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
}

function trendsPage() {
  console.log("TRENDS!!");
  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  CategoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");
}

// console.log(Sections().headerSection.classList.add('inactive'))
