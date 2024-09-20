// fetchBreedList function to fetch breed list based on the animal parameter
async function fetchBreedList({ queryKey }) {
  // Extract the animal parameter from the queryKey
  const animal = queryKey[1];

  // If no animal is provided, return an empty array
  if (!animal) return [];

  // Fetch data from the API with the given animal parameter
  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  // If the response is not okay, throw an error
  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  // Return the response data as JSON
  return res.json();
}

// Export the fetchBreedList function as the default export
export default fetchBreedList;
