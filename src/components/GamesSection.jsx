import { useState } from 'react'

const games = [
  {
    id: 1,
    name: 'Super Mario Bros',
    link: "https://es.wikipedia.org/wiki/Super_Mario_Bros."
  },
  {
    id: 2,
    name: 'Castlevania',
    link: "https://es.wikipedia.org/wiki/Castlevania"
  },
  {
    id: 3,
    name: 'Ninja Gaiden',
    link: "https://es.wikipedia.org/wiki/Ninja_Gaiden"
  },
  {
    id: 4,
    name: 'Dragon Quest',
    link: "https://es.wikipedia.org/wiki/Dragon_Quest"
  },
  {
    id: 5,
    name: 'Tetris',
    link: "https://es.wikipedia.org/wiki/Tetris"
  },
  {
    id: 6,
    name: 'Mega Man',
    link: "https://es.wikipedia.org/wiki/Mega_Man"
  }
]

function GamesSection() {
  const [showList, setShowList] = useState(true)
  const [liked, setLiked] = useState(false)

  return (
    <section className="p-8 bg-slate-100 text-center max-w-5xl mx-auto rounded-lg shadow-lg my-8">
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Los videojuegos retro representan la esencia de los primeros tiempos en
        la industria del gaming, con sus gráficos pixelados y música 8 bits. Estos
        clásicos no solo marcaron nuestra infancia, sino que también sentaron las
        bases para los juegos modernos.
      </p>

      <p className="text-gray-600 mb-8 text-base italic">
        ¿Cuál fue tu juego favorito? ¿Te gustaría revivir esas aventuras de antaño?
      </p>

      <button
        onClick={() => setShowList(!showList)}
        className="mb-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mr-4 cursor-pointer"
      >
        {showList ? 'Ocultar lista de juegos' : 'Mostrar lista de juegos'}
      </button>

      <button
        onClick={() => setLiked(!liked)}
        className={`mb-4 px-6 py-2 rounded-lg text-white cursor-pointer ${liked ? 'bg-red-600' : 'bg-gray-600'} hover:brightness-110`}
      >
        {liked ? '¡Gracias por tu like!' : 'Dale like a esta página'}
      </button>

      {showList && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {games.map((game) => (
            <li
              key={game.id}
              className="cursor-pointer p-4 bg-white shadow-md rounded-lg text-lg font-semibold transition-transform hover:scale-105"
            >
              <a href={game.link} target='_blank'>🎮 {game.name}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default GamesSection


