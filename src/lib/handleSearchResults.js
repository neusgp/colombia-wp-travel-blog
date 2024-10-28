export const handleSearchResults = (inputField, resultsSection) => {
  let timerId;

  inputField.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!value) {
      clearTimeout(timerId);
      return (resultsSection.innerHTML = "");
    }

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(async () => {
      const result = await fetchPosts(value);

      console.log(result.length);

      if (result.length === 0) {
        resultsSection.innerHTML = `<p>Apologies, there are no posts related to your search</p>`;
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
};
