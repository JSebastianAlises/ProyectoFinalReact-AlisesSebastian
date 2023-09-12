import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
        src={require(`../../imagenes/Discografia/${props.imagen}.jpg`)}
        alt="Disco de la renga"/>
      <Card.Body className='text-center'>
        <Card.Title>{props.titulo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item>${props.precio}</ListGroup.Item>
        <ListGroup.Item><button>{props.comprar}</button></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default KitchenSinkExample;