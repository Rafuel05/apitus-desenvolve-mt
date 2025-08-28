import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import TestTailwind from './components/TestTailwind'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          Teste
        </div>
      </main>
    </div>
  )
}

export default App