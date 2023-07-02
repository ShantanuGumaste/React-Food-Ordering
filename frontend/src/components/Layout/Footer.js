import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <>
      <footer style={{ backgroundColor: "#8a2b06", color:"white" }}>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>Food Delivery &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer