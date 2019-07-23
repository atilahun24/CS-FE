import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Layout from './shared/Layout'

class Cars extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount () {
    // api request
    axios(`${apiUrl}/cars`)
      .then(res => this.setState({ cars: res.data.cars, loaded: true }))
      .catch(err => this.setState({ error: err.stack }))
  }

  render () {
    const { cars, error, loaded } = this.state

    const carsList = cars.map(car => (
      <li key={car.id}>
        <Link to={`/cars/${car.id}`}>{car.make} {car.model} ({car.year})</Link>
      </li>
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
        <h4 id='carsHeader' className="border border-secondary" >Cars</h4>
        <ul id='list' className="border border-primary">
          {carsList}
        </ul>
      </Layout>
    )
  }
}

export default Cars
