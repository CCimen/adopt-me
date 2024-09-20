import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import { useQuery } from '@tanstack/react-query'; // Import useQuery from @tanstack/react-query
import fetchPet from './fetchPet'; // Import fetchPet function

// Details component to display details of a specific pet based on the id parameter
const Details = () => {
  // Extract the id parameter from the URL using useParams hook
  const { id } = useParams();

  // Use useQuery hook to fetch pet details based on the id parameter
  const results = useQuery(['details', id], fetchPet);

  // If the data is still loading, display a loading indicator
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⏳</h2> {/* Loading spinner */}
      </div>
    );
  }

  // Extract the pet details from the fetched data
  const pet = results.data.pets[0];

  return (
    // Display the pet details
    <div className="details">
      <div>
        {/* Display the pet's name */}
        <h1>{pet.name}</h1>
        {/* Display the pet's animal type, breed, city, and state */}
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        {/* Button to adopt the pet */}
        <button>Adopt {pet.name}</button>
        {/* Display the pet's description */}
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

// Export the Details component as the default export
export default Details;
