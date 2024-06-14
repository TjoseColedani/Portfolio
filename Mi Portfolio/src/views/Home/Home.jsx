import Works from '../../components/Works/Works'
import MyInfo from '../../components/MyInfo/MyInfo'
import MyService from '../../components/MyService/MyService'
import ContactMe from '../../components/ContactMe/ContactMe'
import Hero from '../../components/Hero/Hero';

export default function Home() {
    return (
        <div className=' w-full h-max'>
            <Hero />
            <Works />
            <MyInfo />
            <MyService />
            <ContactMe />
        </div>
    );
}