export const handleShowSearchSection = (
  inputField,
  resultsSection,
  allPostsSection
) => {
  inputField.addEventListener("input", (e) => {
    const value = e.target.value;
    const isSearchActive = resultsSection.classList.contains(
      "show-search-section"
    );

    if (!value && isSearchActive) {
      resultsSection.classList.remove("show-search-section");
      resultsSection.classList.add("search-section");

      allPostsSection.classList.remove("hide-posts-section");
    }
    if (value && !isSearchActive) {
      console.log("adding class");
      resultsSection.classList.add("show-search-section");
      resultsSection.classList.remove("search-section");

      allPostsSection.classList.add("hide-posts-section");
    }
  });
};
