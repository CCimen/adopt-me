import { useState } from 'react'; // Import useState from React
import { useQuery } from '@tanstack/react-query'; // Import useQuery from @tanstack/react-query
import Results from './Results'; // Import Results component
import useBreedList from './useBreedList'; // Import useBreedList custom hook
import fetchSearch from './fetchSearch'; // Import fetchSearch function

// List of available animals
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  // State to manage request parameters
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  // State to manage selected animal
  const [animal, setAnimal] = useState('');
  // Custom hook to fetch breed list based on the selected animal
  const [breeds] = useBreedList(animal);

  // Use useQuery hook to fetch search results based on request parameters
  const results = useQuery(['search', requestParams], fetchSearch);
  // Extract pets data from the results
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission behavior
          const formData = new FormData(e.target); // Create a FormData object from the form
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          };
          setRequestParams(obj); // Update request parameters state
        }}
      >
        {/* Location input field */}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        {/* Animal selection dropdown */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value); // Update selected animal state
            }}
            onBlur={(e) => {
              setAnimal(e.target.value); // Update selected animal state
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
          <select disabled={!breeds.length} id="breed" name="breed">
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
