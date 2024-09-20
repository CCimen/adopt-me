import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Pet component to display individual pet details
const Pet = (props) => {
  // Destructure props to extract individual properties
  const { name, animal, breed, images, location, id } = props;

  // Default hero image if no images are provided
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0]; // Use the first image if images are provided
  }

  return (
    // Link to the details page for the specific pet
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} /> {/* Display the hero image */}
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2> {/* Display the pet's animal type, breed, and location */}
      </div>
    </Link>
  );
};

// Export the Pet component as the default export
export default Pet;
