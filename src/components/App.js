import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import places from '../places';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import 'bootswatch/journal/bootstrap.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }

  render() {
    const { activePlace } = this.state;

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={(index) => this.setState({ activePlace: index })}
              >
                {places.map((place, index) => (
                  <NavItem key={index} eventKey={index}>
                    {place.name}
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} cityName={places[activePlace].cityName} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
