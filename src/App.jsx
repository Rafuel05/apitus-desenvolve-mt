import './App.css'
import Navbar from './components/Navbar/Navbar'
import TestTailwind from './components/TestTailwind'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TestTailwind />
        </div>
      </main>
    </div>
  )
}

export default App