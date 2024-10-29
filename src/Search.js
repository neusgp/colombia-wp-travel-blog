import { handleShowSearchSection, handleSearchResults } from "./lib";

const searchPostsField = document.querySelector(".search-posts");
const searchFoodField = document.querySelector(".search-food");
const resultsSection = document.querySelector(".search-section");
const allPostsSection = document.querySelector(".all-posts");

const inputField = searchPostsField || searchFoodField;

const location = searchPostsField ? "posts" : "food";

if (inputField) {
  handleShowSearchSection(inputField, resultsSection, allPostsSection);
  handleSearchResults(inputField, resultsSection, location);
}
