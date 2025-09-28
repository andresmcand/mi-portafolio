import React from 'react';
import logoHome from '../assets/home.png';
import logoNuevo from '../assets/home.png';
import logoNuevo2 from '../assets/home.png';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/ProjectCard.css';


const projects = [
  {
    title: "HOME Gestion de Gastos",
    description: "Aplicación de escritorio hecha para llebar los gastos del hogar o personales",
    imgUrl: logoHome,
    github: "https://github.com/tuusuario/proyecto1",
    download: "https://link-descarga.com/app1"
  },

  {
    title: "Nuevo Proyecto",
    description: "Descripción del nuevo proyecto que quieras agregar",
    imgUrl: logoNuevo,
    github: "https://github.com/tuusuario/proyecto2",
    download: "https://link-descarga.com/app2"
  },

   {
    title: "Nuevo Proyecto",
    description: "Descripción del nuevo proyecto que quieras agregar",
    imgUrl: logoNuevo2,
    github: "https://github.com/tuusuario/proyecto2",
    download: "https://link-descarga.com/app2"
  },
  // agrega más proyectos aquí
];

function Projects() {
  return (
    <Container id="projects" className="my-5" style={{ backgroundColor: '#d7e3dc', padding: '4rem 0' }}>
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={proj.imgUrl} className="project-img" />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <Button variant="primary" href={proj.github} target="_blank">Código</Button>{' '}
                <Button variant="success" href={proj.download} target="_blank">Descargar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    
  );
}

export default Projects;
