import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { FormControl, Form, Col, Row, Container } from 'react-bootstrap';


function Header() {
  
  return (
    <Container >
      <Form className='search-sort-area'>
        <Row className='pt-3'>
          <Col xs={5}>
            <FormControl placeholder="Search"/>
          </Col>
          <Col xs={3}>
            <Form.Select>
              <option value="">Sort by Category</option>
              <option value="Electronic">Electronic</option>
              <option value="Clothing">Clothing</option>
              <option value="Computer">Computer</option>
              <option value="Home">Home</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Kid">Kid</option>
              <option value="Toys">Toys</option>
              <option value="Tools">Tools</option>
              <option value="Sports">Sports</option>
              <option value="Movies">Movies</option>
              <option value="Outdoors">Outdoors</option>
            </Form.Select>
          </Col>
          <Col xs={3}>
            <Form.Select>
            <option value="">Sort by Price</option>
            <option value="Highest">Highest</option>
            <option value="Lowest">Lowest</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Header;