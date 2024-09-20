import Pet from './Pet'; // Import Pet component

// Results component to display a list of pets
const Results = ({ pets }) => {
  return (
    <div className="search">
      {/* If no pets are found, display a message */}
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        // Otherwise, map over the pets array and render a Pet component for each pet
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal} // Pass the animal type to the Pet component
              key={pet.id} // Use the pet's id as the key for the list
              name={pet.name} // Pass the pet's name to the Pet component
              breed={pet.breed} // Pass the pet's breed to the Pet component
              images={pet.images} // Pass the pet's images to the Pet component
              location={`${pet.city}, ${pet.state}`} // Pass the pet's location to the Pet component
              id={pet.id} // Pass the pet's id to the Pet component
            />
          );
        })
      )}
    </div>
  );
};

// Export the Results component as the default export
export default Results;
