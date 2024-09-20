import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

// Details component to display details of a specific item based on the id parameter
const Details = () => {
  // Extract the id parameter from the URL using useParams hook
  const { id } = useParams();

  return (
    // Display the id parameter in an h2 element
    <h2>{id}</h2>
  );
};

// Export the Details component as the default export
export default Details;
