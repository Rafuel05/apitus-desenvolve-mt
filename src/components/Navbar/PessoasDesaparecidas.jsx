import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const PessoasDesaparecidas = () => {
    return (
        <div className="flex items-center space-x-3">
            <div className="text-right">
                <h1 className="text-white text-lg sm:text-xl font-bold tracking-wide">
                    Pessoas Desaparecidas
                </h1>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
            </div>
        </div>
    )
}
export default PessoasDesaparecidas