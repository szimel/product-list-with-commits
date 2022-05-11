import { Card, Row, Col, Container } from "react-bootstrap"
import { useSelector } from "react-redux";


const Products = () => {
  let products = useSelector((state) => state.products)
  console.log(products);
  let data = [];

  const renderProducts = () => {
    if(products === []) {
      return <p className="fs-1">No products found!</p>
    } else {
      for (let i = 0; i < products.length; i++) {
        data.push (
          <Card style={{ width: '21rem', height: 'auto' }} className='m-3'>
            <Card.Body >
                <Row>
                  <Col>
                  <p className="font-weight-light">Category = {products[i].category}</p>
                  </Col>
                  <Col>
                  <p className="font-weight-bold">${products[i].price}</p>
                  </Col>
                </Row>
                <Row>
                  <img alt='...' src={products[i].image} />
                </Row>
                <Row>
                  <Col>
                    <p className="fs-2">{products[i].name}</p>
                  </Col>
                </Row>
            </Card.Body>
          </Card>
        )
      };
      return data;
    };
  };
  return (
    <Container>
      <Row className='pt-4 w-80 mx-auto'>
        {renderProducts()}
      </Row>
    </Container>
  )
}

export default Products