import Image from 'next/image';

import clasess from './hero.module.css';

function Hero() {
  return (
    <section className={clasess.hero}>
      <div className={clasess.image}>
        <Image
          src="/images/site/rama.png"
          alt="An image showing Rama"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rama</h1>
      <p>
        I blog about web development - especialy backend framwork like laravel
        and next js
      </p>
    </section>
  );
}

export default Hero;
