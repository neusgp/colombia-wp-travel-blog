import { handleShowSearchSection, handleSearchResults } from "./lib";

const searchPostsField = document.querySelector(".search-posts");
const searchFoodField = document.querySelector(".search-food");
const resultsSection = document.querySelector(".search-section");
const allPostsSection = document.querySelector(".all-posts");

console.log(searchPostsField);

const location = searchPostsField ? "posts" : "food";

handleShowSearchSection(
  searchPostsField || searchFoodField,
  resultsSection,
  allPostsSection
);

handleSearchResults(
  searchPostsField || searchFoodField,
  resultsSection,
  location
);
