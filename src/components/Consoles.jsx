const consoles = [
  {
    id: 1,
    name: "Nintendo Entertainment System (NES)",
    img: "https://img.pacifiko.com/PROD/resize/1/500x500/YmNlMGZhZT.jpg",
    link: "https://es.wikipedia.org/wiki/Nintendo_Entertainment_System"
  },
  {
    id: 2,
    name: "Sega Genesis / Mega Drive",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
    link: "https://es.wikipedia.org/wiki/Mega_Drive"
  },
  {
    id: 3,
    name: "Super Nintendo Entertainment System (SNES)",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Wikipedia_SNES_PAL.jpg",
    link: "https://es.wikipedia.org/wiki/Super_Nintendo"
  },
];

export default function Consoles() {
  return (
    <section className="bg-slate-100  max-w-5xl mx-auto p-8 rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Consolas clásicas que marcaron época
      </h2>
      <p className="text-center mb-8 text-gray-600 max-w-xl mx-auto">
        Estas consolas revolucionaron el entretenimiento hogareño y dieron lugar a
        juegos inolvidables que aún son recordados con cariño.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {consoles.map(console => (
          <div
            key={console.id}
            className="flex flex-col items-center"
          >
            <div>
              <a href={console.link} target="_blank" className="flex flex-col items-center">
                <img src={console.img} alt={console.name} className="w-40 rounded-lg shadow-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">{console.name}</h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
