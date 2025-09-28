import React, { useState } from 'react';
import logoHome from '../assets/home.png';
import logoNuevo2 from '../assets/home.png';
import CompraNetIMG from '../assets/CompraNet.png';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import '../styles/ProjectCard.css';

const projects = [
  {
    title: "HOME Gestion de Gastos",
    description: "App de escritorio para gestionar gastos del hogar y personales",
    imgUrl: logoHome,
    github: "https://github.com/tuusuario/proyecto1",
    download: "modal" 
  },
  {
    title: "CompraNet Cloud",
    description: "Es un sistema que administra las compras de una empresa, es un sistema hibrido diseñado para empresas de pocos recursos, el front es un archivo de excel, los datos son leidos con Python y enviados a la nube para interprtetarlos en grafana",
    imgUrl: CompraNetIMG,
    github: "https://github.com/tuusuario/proyecto2",
    download: "modal"
  },
  {
    title: "Nuevo Proyecto",
    description: "Descripción del nuevo proyecto",
    imgUrl: logoNuevo2,
    github: "https://github.com/tuusuario/proyecto2",
    download: "modal"
  },
];

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (download) => {
    if (download === "modal") {
      setShowModal(true);
    } else {
      window.open(download, "_blank");
    }
  };

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
                {/* <Button variant="primary" href={proj.github} target="_blank">Código</Button>{' '} */}
                <Button 
                  variant="success" 
                  onClick={() => handleDownloadClick(proj.download)}
                >
                  Descargar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contacto necesario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Para obtener esta aplicación, por favor ponte en contacto con el administrador del sitio.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;
