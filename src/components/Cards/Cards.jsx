

const Card = ({ title, description, githubLink }) => (
  <div className="bg-blue-800 shadow-md overflow-hidden max-w-96 min-w-72 w-11/12 sm:w-3/4 lg:w-1/2 mx-auto my-4">
    <div className="p-4">
      <h3 className="text-xl text-white font-monserrat font-semibold">{title}</h3>
      <p className="text-white font-monserrat">{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block text-blue-500 font-monserrat font-semibold mt-2">View on GitHub</a>
    </div>
  </div>
);

export default Card;
