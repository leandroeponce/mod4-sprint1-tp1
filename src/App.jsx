import GamesSection from './components/gamesSection';
import Footer from './components/Footer'
import Consoles from './components/Consoles';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <div className='min-h-screen bg-cover' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/022/879/136/non_2x/seamless-gaming-pattern-doodle-background-with-gaming-icons-free-vector.jpg')" }}>
      <Navbar />
      <GamesSection />
      <Consoles />
      <Footer />
      </div>
    </>
  );
}
