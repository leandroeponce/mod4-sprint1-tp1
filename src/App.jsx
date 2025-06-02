import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Consoles from './components/Consoles';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Main />
      <Consoles />
      <Footer />
    </div>
  );
}
