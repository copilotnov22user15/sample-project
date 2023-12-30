import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import StockData from './StockData';




function App() {

  return (
    
    <Row>
      <Col className="mt-5">
        <Container >
          <StockData />
        </Container>
      </Col>
    </Row>
  );
}

export default App;
