const fetchPet = async ({ queryKey }) => {
  // queryKey is an array and the id is inthe index 1
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // If it is an unsuccessful request react query wants us to throw an error
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch is not OK`);
  }

  // React query expects you to return a Promise
  return apiRes.json();
};

export default fetchPet;
