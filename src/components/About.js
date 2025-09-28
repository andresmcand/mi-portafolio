import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <section id="about" style={{ padding: '4rem 0', backgroundColor: '#2c2c2c',  color: '#f5f5f5' }}>
      <Container>
        <h2 >Sobre mí</h2>
        <p>Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones de escritorio y web, tanto en
          entornos corporativos como en proyectos freelance. Poseo sólidos conocimientos en lógica de
          programación y diseño web, aplicando tecnologías como HTML, CSS y Bootstrap para crear interfaces
          modernas y funcionales. Tengo experiencia en análisis y gestión de bases de datos (SQL Server, Oracle y
          MySQL), así como en soporte técnico y monitoreo de servicios en servidores UNIX y Linux. He
          participado en la modelación de redes y servidores, y en proyectos relacionados con programación
          orientada al Internet de las Cosas (IoT). Me caracterizo por ser proactivo, orientado al trabajo en equipo
          y con una fuerte disposición al aprendizaje continuo, especialmente en metodologías ágiles y nuevas
          tecnologías. Actualmente, estoy ampliando mis conocimientos en el área de seguridad informática.

        </p>
      </Container>
    </section>
  );
}

export default About;
