import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <Image src="/hero-image.png" alt="Hero Image" width={600} height={400} className="object-cover rounded-md" />
      <h1>Find your favorite place here!</h1>
      <p>The best prices for over 2 million properties worldwide.</p>
    </section>
  );
};

export default Hero;