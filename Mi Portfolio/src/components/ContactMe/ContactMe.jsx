import { useState } from "react";
import axios from 'axios'



export default function ContactMe() {
    
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_API_KEY;


        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Portafolio Turi Coledani',
                message: message,
            }
        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error)
        }

    }
    
    
    
    
    return (
        <div id="ContactMe">
            <div className="text-center py-4">
                <h2 className="text-4xl font-monserrat font-bold text-white py-10">Contact Me</h2>
            </div>
            <form className="px-4 py-2 text-left w-4/5 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name"></label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 placeholder-custom bg-blue-800  text-white placeholder:text-white/80"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="email"></label>
                <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 placeholder-custom bg-blue-800  text-white placeholder:text-white/80"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="message"></label>
                <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 placeholder-custom bg-blue-800 text-white placeholder:text-white/80"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div className="text-center">
                <button
                type="submit"
                className="bg-blue-500 text-white font-monserrat px-6 py-2 hover:bg-blue-600"
                >
                Send Message
                </button>
            </div>
            </form>
            <div className="text-center py-6">
            <a
                href="https://www.facebook.com/turi.coledani"
                className="text-white font-monserrat hover:text-blue-500 mx-2"
                target="_blank"
                rel="noopener noreferrer"
            >
                Facebook
            </a>
            <a
                href="https://www.instagram.com/turicoledani/"
                className="text-white font-monserrat hover:text-blue-500 mx-2"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
            <a
                href="https://www.linkedin.com/in/jose-salvador-coledani-grillo-10b857278/"
                className="text-white font-monserrat hover:text-blue-500 mx-2"
                target="_blank"
                rel="noopener noreferrer"
            >
                Linkedin
            </a>
            </div>
            <footer className="w-full bg-blue-900 py-3">
            <div className="text-center py-4">
                <p className="text-white font-monserrat font-semibold">@All rights reserved by TuriColedani</p>
            </div>
            </footer>
        </div>
    );
  }
  