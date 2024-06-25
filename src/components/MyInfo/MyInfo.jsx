import myImg from '../../assets/img/Turi.png';

export default function MyInfo() {
    return (
        <div id="MyInfo" className=" w-full h-max p-4">
            <div className="text-center py-4">
                <h2 className=" text-4xl font-bold text-white font-monserrat py-10">My Info</h2>
            </div>
            <div className=" py-4">
                <h3 className=" text-2xl font-semibold pl-4 text-white font-monserrat">About Me</h3>
                <hr className=" w-1/3 border-t-2 h-1 bg-white ml-4 mt-2 font-monserrat"></hr>
            </div>
            <div className=" px-4 py-2">
            <p className="mb-4 text-white font-semibold font-monserrat">
                    Hi, I`m Jose Salvador Coledani Grillo, a Full Stack Development student at Henry, specializing in backend development. I currently live in Salta, Argentina. Since I can remember, technology has always interested me, although I initially doubted my abilities to work in it. Over time, I delved deeper into this world thanks to friends and my own curiosity. Code started to intrigue me more and more, and I developed a keen interest in understanding how things work. I enjoy creating solutions to help people and am always on the lookout to learn new things.
                </p>
                <p className="mb-4 text-white font-semibold font-monserrat">
                    Hola, soy Jose Salvador Coledani Grillo, un estudiante de Full Stack Development en Henry, especializándome en el desarrollo backend. Actualmente resido en Salta, Argentina. Desde siempre me ha interesado la tecnología, aunque al principio dudaba de mis habilidades para trabajar en eso. Con el tiempo, fui adentrándome más en este mundo gracias a amigos y a mi propia curiosidad. Cada vez me atrajo más el código y desarrollé una gran curiosidad por entender cómo funcionan las cosas. Disfruto creando soluciones para las personas y ayudarlas, y siempre estoy en búsqueda de aprender cosas nuevas.
                </p>
            </div>
            <div className="text-center py-4">
            <a href="/CV_TuriColedani.pdf" download className="bg-blue-500 text-white font-monserrat px-6 py-2 hover:bg-blue-600">
                    Download CV
                </a>
            </div>
            <div className="text-center py-4">
                <img src={myImg} alt="Turi Coledani" className=' w-52 h-auto rounded-full inline-block align-middle'/>
            </div>
                <div className=" py-4">
                    <h3 className="text-2xl font-semibold pl-4 text-white font-monserrat">Skills</h3>
                    <hr className="w-1/3 border-t-2 h-1 bg-white ml-4 mt-2 font-monserrat" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center pt-5">
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">HTML</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">CSS</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">JavaScript</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">TypeScript</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">Express</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">Node.js</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">MongoDB</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">Mongoose</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">React + Vite</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">Tailwind</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">Nest.js</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">PostgreSQL</span>
                    <span className="bg-blue-800 text-white font-monserrat font-semibold px-4 py-2 rounded-full">SQL</span>
                </div>
            </div>
        </div>
    )
}