import { useState } from 'react'

function Navbar() {

    const [isOpen, setisOpen] = useState(false)

    const toggleMenu = () => {
        setisOpen(!isOpen)
    }

    const navbarLinks = [
        {
            id:1,
            title: "Inicio",
            link: "/"
        },
        {
            id:2,
            title: "Nosotros",
            link: "/"
        },
        {
            id:3,
            title: "Contacto",
            link: "/"
        },
        {
            id:4,
            title: "Soporte",
            link: "/"
        }
    ]

    return (
        <nav className="bg-cyan-900 text-white">
        {/* VISTA ESCRITORIO */}
        <div className="flex justify-between items-center px-6 py-3 sm:px-12 sm:py-6">
            {/* LOGO */}
            <div>
                <a href="/" className="flex items-center gap-2">
                    <img src={"https://images.seeklogo.com/logo-png/5/2/famicom-pad-logo-png_seeklogo-51797.png"} alt="joystick-famicom-logo" className="w-[60px] " />
                    <p className="text-2xl font-bold">Retro Games</p>
                </a>
            </div>

            {/* BURGER BUTTON */}
            <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {
                    isOpen ? ( 
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"> 
                    </path> ) :
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16">
                    </path>
                } 
                
                </svg>
            </button>

            {/* NAVIGATION LINKS */}
            <div className="hidden md:block">
                <ul className="flex space-x-4">
                    {navbarLinks.map(link => (
                        <li key={link.id}>
                        <a href={link.link} className="text-lg hover:text-red-500 cursor-pointer transition-transform hover:scale-110 inline-block">{link.title}</a>
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
        
        {/* VISTA MOBILE */}
        <div className={`md:hidden absolute w-full bg-gray-800/70 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible" }`}>
            <ul className='flex flex-col px-4 py-2 gap-2'>
                {navbarLinks.map((link) => (
                    <li key={link.id} className='text-center'>
                        <a href={link.link} className='hover:text-red-500' onClick={()=> setisOpen(false)}> {link.title} </a>
                    </li>
                ))

                }
            </ul>
        </div>
        </nav>
  )
}

export default Navbar