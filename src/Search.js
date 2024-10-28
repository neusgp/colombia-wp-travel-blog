import { fetchPosts } from "./api";
import { handleShowSearchSection } from "./lib/handleShowSearchSection";

const inputField = document.querySelector(".search-field");
const resultsSection = document.querySelector(".search-section");
//const allPosts = document.querySelector(".all-posts");

handleShowSearchSection(inputField, resultsSection);
handleSearchResults(inputField, resultsSection);
