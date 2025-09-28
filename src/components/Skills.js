import React from 'react';
import { Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import jsLogo from '../assets/js.png';
import visualS from '../assets/visualStudio.png';
import Oracle from '../assets/oracle.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import pythonLogo from '../assets/python.png';
import Cnumeral from '../assets/C.png';
import sqlLogo from '../assets/sql.png';
import mongo from '../assets/mongoDB.png';
import mysqlLogo from '../assets/mySQL.png';
import powerbiLogo from '../assets/powerBI.png';
import grafanaLogo from '../assets/grafana.png';
import bashLogo from '../assets/shell.png';
import linuxLogo from '../assets/linux.png';

function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 0', backgroundColor: '#f0f4f8' }}>
      <Container>
        <h2 className="text-center mb-4">Áreas de experiencia</h2>
        <Accordion defaultActiveKey="0" flush>
          {/* Lenguajes y Frameworks */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lenguajes y Frameworks</Accordion.Header>
            <Accordion.Body>
              <Row className="text-center">
                <Col xs={4} md={2}><Image src={jsLogo} alt="JavaScript" fluid /></Col>
                <Col xs={4} md={2}><Image src={reactLogo} alt="React" fluid /></Col>
                <Col xs={4} md={2}><Image src={nodeLogo} alt="Node.js" fluid /></Col>
                <Col xs={4} md={2}><Image src={pythonLogo} alt="Python" fluid /></Col>
                <Col xs={4} md={2}><Image src={Cnumeral} alt="C#" fluid /></Col>
                <Col xs={4} md={2}><Image src={visualS} alt="visual studio" fluid /></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/* Bases de datos */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bases de datos</Accordion.Header>
            <Accordion.Body>
              <Row className="text-center">
                <Col xs={4} md={2}><Image src={mongo} alt="PostgreSQL" fluid /></Col>
                <Col xs={4} md={2}><Image src={mysqlLogo} alt="MySQL" fluid /></Col>
                <Col xs={4} md={2}><Image src={sqlLogo} alt="SQL" fluid /></Col>
                <Col xs={4} md={2}><Image src={Oracle} alt="oracle" fluid /></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/* Ciencia de datos */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Ciencia de datos y visualización</Accordion.Header>
            <Accordion.Body>
              <Row className="text-center">
                <Col xs={4} md={2}><Image src={powerbiLogo} alt="Power BI" fluid /></Col>
                <Col xs={4} md={2}><Image src={grafanaLogo} alt="Grafana" fluid /></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          {/* Automatización y sistemas */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Automatización y sistemas</Accordion.Header>
            <Accordion.Body>
              <Row className="text-center">
                <Col xs={4} md={2}><Image src={bashLogo} alt="Bash" fluid /></Col>
                <Col xs={4} md={2}><Image src={linuxLogo} alt="Linux" fluid /></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default Skills;
