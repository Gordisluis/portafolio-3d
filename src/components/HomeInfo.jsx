import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hola, soy
        <span className='font-semibold mx-2 text-white'>Luis Garcia</span>
        👋
        <br />
        Desarrollador de Software 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Freelancer <br />  trabajando con mis clientes e desarrollado habilidades en el camino.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Saber mas
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          A travez de mi viaje<br /> Observa lo que aprendi en mis viajes en el mundo de la programación
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visita my portafolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        necesitas un proyecto o buscas por un programador? <br/> estoy a unas teclas de distancia
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Hablemos...
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
