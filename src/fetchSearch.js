async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  console.log(location, animal, breed);

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(
      `pet search is not ok for ${animal}, ${location}, ${breed}`
    );
  }

  return res.json();
}

export default fetchSearch;
