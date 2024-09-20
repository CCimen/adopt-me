import { useState, useEffect } from "react";

// Local cache to store breed lists for different animals
const localCache = {};

// Custom hook to fetch and manage breed list based on the selected animal
export default function useBreedList(animal) {
  // State to store the list of breeds
  const [breedList, setBreedList] = useState([]);
  // State to store the status of the fetch operation
  const [status, setStatus] = useState("unloaded");

  // useEffect hook to fetch breed list whenever the animal changes
  useEffect(() => {
    // If no animal is selected, clear the breed list
    if (!animal) {
      setBreedList([]);
    }
    // If the breed list for the selected animal is already in the cache, use it
    else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    }
    // Otherwise, fetch the breed list from the API
    else {
      requestBreedList();
    }

    // Function to fetch breed list from the API
    async function requestBreedList() {
      // Clear the current breed list and set status to loading
      setBreedList([]);
      setStatus("loading");

      // Fetch breed list from the API
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      // Store the fetched breed list in the local cache
      localCache[animal] = json.breeds || [];

      // Update the breed list state with the fetched data
      setBreedList(localCache[animal]);
      // Set status to loaded
      setStatus("loaded");
    }
  }, [animal]); // Dependency array to re-run the effect when the animal changes

  // Return the breed list and the status
  return [breedList, status];
}
