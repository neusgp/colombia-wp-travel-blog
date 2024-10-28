export const handleShowSearchSection = (inputField, resultsSection) => {
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
  }
};
