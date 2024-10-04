
import Card from '../Cards/Cards';

const projects = [
  {
    id: 1,
    title: 'Advanced Parcking - Back End -',
    description: 'App creada para realizar reservas de lugares de estacionamiento',
    githubLink: 'https://github.com/TjoseColedani/advanced-parking-back',
  },
  {
    id: 2,
    title: 'Advanced Parcking - Front End -',
    description: 'App creada para realizar reservas de lugares de estacionamiento',
    githubLink: '',
  },
  {
    id: 3,
    title: 'Reservas Restaurant - Back End -',
    description: 'App creada para gestionar la disponibilidad de mesas en un restaurante - En Proceso',
    githubLink: '',
  },
  {
    id: 4,
    title: 'Reservas Restaurant - Front End -',
    description: 'App creada para gestionar la disponibilidad de mesas en un restaurante - En Proceso',
    githubLink: '',
  },
  {
    id: 5,
    title: 'FitZone Gym App',
    description: 'App creada para realizar reservas en un gym',
    githubLink: 'https://github.com/TjoseColedani/Proyecto-Henry-M3',
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
