const consoles = [
  {
    name: "Nintendo Entertainment System (NES)",
    img: "https://img.pacifiko.com/PROD/resize/1/500x500/YmNlMGZhZT.jpg",
  },
  {
    name: "Sega Genesis / Mega Drive",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
  },
  {
    name: "Super Nintendo Entertainment System (SNES)",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Wikipedia_SNES_PAL.jpg",
  },
];

export default function Consoles() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Consolas clásicas que marcaron época
      </h2>
      <p className="text-center mb-8 text-gray-600 max-w-xl mx-auto">
        Estas consolas revolucionaron el entretenimiento hogareño y dieron lugar a
        juegos inolvidables que aún son recordados con cariño.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {consoles.map(({ name, img }, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
          >
            <img src={img} alt={name} className="w-48 rounded-lg shadow-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
