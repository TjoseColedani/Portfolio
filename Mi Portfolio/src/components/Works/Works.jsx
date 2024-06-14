
import Card from '../Cards/Cards';

const projects = [
  {
    id: 1,
    title: 'Advanced Parcking - Back End -',
    description: 'App creada para realizar reservas de lugares de estacionamiento',
    githubLink: 'https://github.com/TjoseColedani/advanced-parking-back',
  }
];

export default function Works() {
  return (
    <div id="Works">
      <div className="text-center py-4">
        <h2 className="text-4xl font-bold text-white font-monserrat py-10">Works</h2>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
