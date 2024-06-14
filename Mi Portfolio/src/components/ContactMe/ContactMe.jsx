

export default function ContactMe() {
    return (
        <div id="ContactMe">
            <div className="text-center py-4">
            <h2 className="text-4xl font-monserrat font-bold text-white py-10">Contact Me</h2>
            </div>
            <form className="px-4 py-2 text-left w-4/5 mx-auto">
            <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name"></label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 placeholder-custom bg-blue-800  text-white placeholder:text-white/80"
                placeholder="Name"
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
  