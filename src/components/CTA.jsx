import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        tienes una idea? <br className='sm:block hidden' />
        construyamosla juntos!
      </p>
      <Link to='/contact' className='btn'>
        Contacto
      </Link>
    </section>
  );
};

export default CTA;
