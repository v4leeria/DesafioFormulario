import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario({ claseInput, type, name, placeholder }) {
  return (
    <Form>
      <div className="mb-3">
        <input type="text" placeholder="Escribe tu nombre" name="nombre" />
      </div>

      <Form.Group className="mb-3">
        <Form.Control
          className={claseInput}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          className={claseInput}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          className={claseInput}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;
