export const fetchPosts = async (query, postType) => {
  const url = `http://learningwp.local/wp-json/wp/v2/posts?search=${query}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
};
