// Function to fetch search results based on animal, location, and breed
async function fetchSearch({ queryKey }) {
  // Destructure animal, location, and breed from the queryKey
  const { animal, location, breed } = queryKey[1];

  // Fetch data from the API with the given parameters
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

  // If the response is not okay, throw an error
  if (!res.ok) throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  // Return the response data as JSON
  return res.json();
}

// Export the fetchSearch function as the default export
export default fetchSearch;
