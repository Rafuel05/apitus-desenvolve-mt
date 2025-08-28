import Logo from './Logo'
import PessoasDesaparecidas from './PessoasDesaparecidas'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-blue-900 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">

          <Logo />

          <PessoasDesaparecidas />

        </div>
      </div>
    </nav>
  )
}

export default Navbar