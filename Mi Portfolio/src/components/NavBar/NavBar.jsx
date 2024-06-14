import { useState } from 'react';



export default function NavBar() {

    const [isNavOpen,setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const visibility = isNavOpen ? " flex flex-col flex-1 justify-around py-20 items-center text-white text-xl font-bold" : "hidden"
    const buttonContainer = isNavOpen ? " flex flex-col w-3/4 h-screen fixed top-0 right-0 backdrop-blur pt-3" : "flex"

    return (
            <nav className= ' w-full fixed z-50 backdrop-blur-md top-0 left-0 h-14 pt-3 flex justify-center'>
                <div className=' flex w-full max-w-[1350px] justify-between px-5 items-center'>
                    <h2 className=' text-white font-monserrat font-bold'>Turi Coledani</h2>
                    <div className={`${buttonContainer}`}>
                        <button onClick={toggleNav} className=' z-30 text-white md:hidden'>
                            X
                        </button>
                        <ul className= {`${visibility} md:flex md:flex-1 md:justify-center md:gap-4`} >
                            <li className=' text-white font-monserrat font-semibold p-14'>
                                <a  href="#Home">Home</a>
                            </li>
                            <li className=' text-white font-monserrat font-semibold p-14'>
                                <a  href="#Works">Works</a>
                            </li>
                            <li className=' text-white font-monserrat font-semibold p-14'>
                                <a  href="#MyInfo">My Info</a>
                            </li>
                            <li className=' text-white font-monserrat font-semibold p-14'>
                                <a  href="#MyService">My Service</a>
                            </li>
                            <li className=' text-white font-monserrat font-semibold p-14'>
                                <a  href="#ContactMe">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}