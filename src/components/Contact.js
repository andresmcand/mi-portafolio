import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6zf3eh1',
      'template_sttuplw',
      form.current,
      'hG8RxGc8KAf8Yu5CZ'
    ).then(
      (result) => {
        alert('Mensaje enviado con éxito');
        e.target.reset();
      },
      (error) => {
        alert('Hubo un error, intenta más tarde');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', backgroundColor: '#2c2c2c',  color: '#f5f5f5' }}>
      <Container>
        <h2 className="text-center mb-4">Contáctame</h2>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="from_name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" name="from_email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">Enviar mensaje</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;


/* id de servicio: service_6zf3eh1
publib key: hG8RxGc8KAf8Yu5CZ
templete ID: template_on2vq3b

name Outlook
*/