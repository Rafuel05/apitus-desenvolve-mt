import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import PersonList from './components/PersonList/PersonList';

function App() {
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection onSearch={handleSearch} isLoading={isLoading} />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PersonList filters={filters} />
        </div>
      </main>
    </div>
  );
}

export default App;