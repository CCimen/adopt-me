import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter, Routes, Route, and Link from react-router-dom
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider from @tanstack/react-query
import Details from './Details'; // Import Details component
import SearchParams from './SearchParams'; // Import SearchParams component

// Create a new QueryClient instance with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// App component that serves as the main component of the application
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {' '}
        {/* Wrap the application in BrowserRouter to enable routing */}
        <QueryClientProvider client={queryClient}>
          {' '}
          {/* Wrap the application in QueryClientProvider to enable React Query */}
          <header>
            {/* Link to the home page */}
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            {' '}
            {/* Define the routes for the application */}
            {/* Route for the Details component, with a dynamic parameter :id */}
            <Route path="/details/:id" element={<Details />} />
            {/* Route for the SearchParams component, which is the default route */}
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

// Get the root container element from the DOM
const container = document.getElementById('root');
// Create a root for React to render the application
const root = createRoot(container);
// Render the App component into the root container
root.render(<App />);
