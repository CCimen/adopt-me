// fetchPet function to fetch pet details based on the id parameter
const fetchPet = async ({ queryKey }) => {
  // Extract the id parameter from the queryKey
  const id = queryKey[1];

  // Fetch data from the API with the given id parameter
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // If the response is not okay, throw an error
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // Return the response data as JSON
  return apiRes.json();
};

// Export the fetchPet function as the default export
export default fetchPet;
