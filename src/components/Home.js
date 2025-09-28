import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <Container className="text-center">
        <h1>Bienvenido a Mi Portafolio</h1>
        <p>Ingeniero de sistemas | Proyectos personales</p>
      </Container>
    </section>
  );
}

export default Home;
