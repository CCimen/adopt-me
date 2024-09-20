import { useQuery } from '@tanstack/react-query'; // Import useQuery from @tanstack/react-query
import fetchBreedList from './fetchBreedList'; // Import fetchBreedList function

// Custom hook to fetch and manage breed list based on the selected animal
export default function useBreedList(animal) {
  // Use useQuery hook to fetch breed list based on the animal parameter
  const results = useQuery(['breeds', animal], fetchBreedList);

  // Return the breed list and the status of the fetch operation
  return [results?.data?.breeds ?? [], results.status];
}
