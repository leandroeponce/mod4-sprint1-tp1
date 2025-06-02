import { useState } from 'react'
import { motion } from 'framer-motion'

const games = [
  'Super Mario Bros.',
  'The Legend of Zelda',
  'Metroid',
  'Mega Man 2',
  'Castlevania',
  'Street Fighter II'
]

export default function Main() {
  const [showList, setShowList] = useState(true)
  const [liked, setLiked] = useState(false)

  return (
    <main className="p-8 bg-slate-100 text-center max-w-5xl mx-auto rounded-lg shadow-lg my-8">
      <motion.p
        className="text-gray-700 mb-6 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Los videojuegos retro representan la esencia de los primeros tiempos en
        la industria del gaming, con sus gráficos pixelados y música 8 bits. Estos
        clásicos no solo marcaron nuestra infancia, sino que también sentaron las
        bases para los juegos modernos.
      </motion.p>

      <motion.p
        className="text-gray-600 mb-8 text-base italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ¿Cuál fue tu juego favorito? ¿Te gustaría revivir esas aventuras de antaño?
      </motion.p>

      <button
        onClick={() => setShowList(!showList)}
        className="mb-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mr-4"
      >
        {showList ? 'Ocultar lista de juegos' : 'Mostrar lista de juegos'}
      </button>

      <button
        onClick={() => setLiked(!liked)}
        className={`mb-4 px-6 py-2 rounded-lg text-white ${liked ? 'bg-red-600' : 'bg-gray-600'} hover:brightness-110`}
      >
        {liked ? '¡Gracias por tu like!' : 'Dale like a esta página'}
      </button>

      {showList && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {games.map((game, index) => (
            <motion.li
              key={index}
              className="p-4 bg-white shadow-md rounded-lg text-lg font-semibold"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              🎮 {game}
            </motion.li>
          ))}
        </ul>
      )}
    </main>
  )
}




