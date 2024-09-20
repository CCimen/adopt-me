import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

// List of available animals
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // State to store the list of pets
  const [pets, setPets] = useState([]);
  // State to store the location input value
  const [location, setLocation] = useState("");
  // State to store the selected animal
  const [animal, setAnimal] = useState("");
  // State to store the selected breed
  const [breed, setBreed] = useState("");
  // Custom hook to fetch and manage breed list based on the selected animal
  const [breeds] = useBreedList(animal);

  // useEffect hook to fetch pets when the component mounts
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to fetch pets from the API
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    // Update the pets state with the fetched data
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        {/* Location input field */}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        {/* Animal selection dropdown */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed(""); // Reset breed when animal changes
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed(""); // Reset breed when animal changes
            }}
          >
            <option />
            {/* Map over the ANIMALS array to create options */}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* Breed selection dropdown */}
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length} // Disable if no breeds are available
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {/* Map over the breeds array to create options */}
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        {/* Submit button */}
        <button>Submit</button>
      </form>
      {/* Display the list of pets */}
      <Results pets={pets} />
    </div>
  );
};

// Export the SearchParams component as the default export
export default SearchParams;
