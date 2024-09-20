import { Link } from "react-router-dom";
// Pet component that displays information about a pet
const Pet = ({ name, animal, breed, images, location, id }) => {
  // Default hero image if no images are provided
  let hero = "http://pets-images.devs-apis.com/pets/none.jpg";

  // If images array is not empty, use the first image as the hero image
  if (images.length) {
    hero = images[0];
  }

  return (
    // Link to the pet details page using the pet's id
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        {/* Display the hero image */}
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        {/* Display the pet's name */}
        <h1>{name}</h1>
        {/* Display the pet's animal type, breed, and location */}
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

// Export the Pet component as the default export
export default Pet;
