import myImg from '../../assets/img/Turi.png';

export default function Hero() {
return (
    <div id="Home" className=' w-full relative flex flex-col md:justify-center md:flex-row-reverse items-center h-screen'>
        <div className=' flex w-full md:w-1/2 justify-center'>
            <img src={myImg} alt="Turi Coledani" className=' w-9/12 max-w-[500px] min-w-[300px]' />
        </div>
        <div className=' h-64 flex flex-col p-20 gap-8'>
            <div className=' h-28 flex flex-col gap-3'>
                <p className=' text-6xl text-white font-nunito font-semibold'>Turi</p>
                <p className=' text-6xl text-white font-nunito font-semibold'>Coledani</p>
            </div>
            <div className=' h-28 flex flex-col gap-3'>
                <p className=' text-4xl text-white font-monserrat'>Full Stack Development</p>
                <hr className=' w-44 h-1 bg-white'></hr>
            </div>
        </div>
    </div>
    )
}