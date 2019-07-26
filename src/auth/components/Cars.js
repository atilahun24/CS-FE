import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Layout from './shared/Layout'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class Cars extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: [],
      loaded: false,
      error: null,
      makes: [],
      models: [],
      years: [],
      displayCars: []
    }
  }

  // creating a new array of filtered items to populate the dropdown menu
  componentDidMount () {
    // api request
    axios(`${apiUrl}/cars`)
      // const sortedList= carsList.sort()
      .then(res => {
        const makes = [...new Set(res.data.cars.map(car => car.make).sort())]
        const models = [...new Set(res.data.cars.map(car => car.model).sort())]
        const years = [...new Set(res.data.cars.map(car => car.year).sort())]
        this.setState({ makes })
        this.setState({ models })
        this.setState({ years })
        this.setState({ cars: res.data.cars, loaded: true })
      })
      .catch(err => this.setState({ error: err.stack }))
  }

  handleChange = event => {
    // console.log(event.target.value)
    const filteredCars = this.state.cars.filter(car => event.target.value === car.make)
    this.setState({ displayCars: filteredCars })
  }

  handleChange2 = event => {
    // console.log(event.target.value)
    const filteredCars2 = this.state.cars.filter(car => event.target.value === car.model)
    this.setState({ displayCars: filteredCars2 })
  }

  handleChange3 = event => {
    // console.log(event.target.value)
    const filteredCars3 = this.state.cars.filter(car => +event.target.value === car.year)
    this.setState({ displayCars: filteredCars3 })
  }

  render () {
    const { makes, error, loaded, cars, models, years } = this.state

    const makesList = makes.map((make, i) => (
      <option key={i} value={make}>
        {make}
        { /* <Link to={`/cars/${car.id}`}>{car.make} {car.model} ({car.year})</Link> */ }
      </option>
    ))

    const modelsList = models.map((model, i) => (
      <option key={i}>
        {model}
      </option>
    ))

    const yearsList = years.map((year, i) => (
      <option key={i}>
        {year}
      </option>
    ))

    const carsList = this.state.displayCars.map(car => (
      <ListGroup.Item
        key={car.id}
        action
        as={Link}
        to={`/cars/${car.id}`}
      >
        { `${car.make} ${car.model} (${car.year})` }
      </ListGroup.Item>
    ))

    // need the key so react makes id uniquely identifiable so that it knows exactly what changes to make

    if (!loaded) {
      return <p>Loading...</p>
    }

    if (cars.length === 0) {
      return <p>No Reviews!</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }
    // cars is an array that we are mapping over
    return (
      <Layout>
        <h4 id='carsHeader' >Cars</h4>
        <Form className="form2">
          <Row>
            <Col>
              <Form.Control size="lg" as='select' id='list' className="border border-primary" onChange={this.handleChange}>
                <option default>
                  Select Make
                </option>
                {makesList}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control size="lg" as='select' id='list' className="border border-primary" onChange={this.handleChange2}>
                <option default>
                  Select Model
                </option>
                {modelsList}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control size="lg" as='select' id='list' className="border border-primary" onChange={this.handleChange3}>
                <option default>
                Select Year
                </option>
                {yearsList}
              </Form.Control>
            </Col>
            <Col>
              <Button size="lg" variant="primary">Search</Button>
            </Col>
          </Row>
        </Form>
        <ListGroup>
          {carsList}
        </ListGroup>
      </Layout>
    )
  }
}

export default Cars
