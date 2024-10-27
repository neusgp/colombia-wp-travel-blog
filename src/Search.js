import { getResults } from "./api";

const inputField = document.querySelector(".search-field");
const resultsSection = document.querySelector(".search-section");
const allPosts = document.querySelector(".all-posts");

if (inputField) {
  inputField.addEventListener("input", (e) => {
    const value = e.target.value;
    const isSearchActive = resultsSection.classList.contains(
      "show-search-section"
    );

    if (!value && isSearchActive) {
      console.log("removing class");
      resultsSection.classList.remove("show-search-section");
      allPosts.classList.add(".hide-all-posts");
    }
    if (value && !isSearchActive) {
      console.log("adding class");
      resultsSection.classList.add("show-search-section");
      allPosts.classList.add(".hide-all-posts");
    }
  });

  let timerId;

  inputField.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!value) {
      clearTimeout(timerId);
      return (resultsSection.innerHTML = "");
    }

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(async () => {
      const result = await getResults(value);

      console.log(result.length);

      if (result.length === 0) {
        resultsSection.innerHTML += `<p>Apologies, there are no posts related to your search</p>`;
        return;
      }

      if (result) {
        resultsSection.innerHTML = "";
        console.log(result);
        result.forEach(({ title }) => {
          return (resultsSection.innerHTML += `<h2>${title.rendered}</h2>`);
        });
      }
    }, 600);
  });
}
