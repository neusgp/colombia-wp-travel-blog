import { fetchPosts } from "../api";

const getPostPreviewHTML = (title, excerpt, link, the_author) => `
 <li>        
                  <div id='post-preview' class='search-post-preview'>
                        <div id='post-data'>
                            <h4>${title}</h4>
                            ${excerpt}<a href="${link}">Continue reading</a>
                            <div class='post-details'>
                                <p>Posted by: <span class='details-highlight'>${the_author}</span></p>
                            </div>
                        </div>
                    </div>
                    </li>`;

export const handleSearchResults = (inputField, resultsSection, location) => {
  let timerId;

  inputField.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!value) {
      clearTimeout(timerId);
      return (resultsSection.innerHTML = "");
    }
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(async () => {
      const result = await fetchPosts(value, location);

      if (result.length === 0) {
        resultsSection.innerHTML = `<p>Apologies, there are no posts related to your search</p>`;
        return;
      }
      if (result) {
        resultsSection.innerHTML = "";
        console.log(result);
        result.forEach(({ title, excerpt, link, the_author }) => {
          return (resultsSection.innerHTML += getPostPreviewHTML(
            title.rendered,
            excerpt.rendered,
            link,
            the_author
          ));
        });
      }
    }, 600);
  });
};
