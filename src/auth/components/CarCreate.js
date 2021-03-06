import React, { Component } from 'react'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import CarForm from './shared/CarForm'
import messages from '../messages'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class CarCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
        make: '',
        model: '',
        year: '',
        vehicle_type: '',
        grade: '',
        description: ''
      },
      createdCarId: null
    }
  }

    handleChange = event => {
      const updatedField = {
        [event.target.name]: event.target.value
      }

      const editedCar = Object.assign(this.state.car, updatedField)

      this.setState({ car: editedCar })
    }

    handleSubmit = event => {
      event.preventDefault()

      axios({
        url: `${apiUrl}/cars`,
        method: 'POST',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        },
        data: { car: this.state.car }
      })
        .then(res => this.setState({ createdCarId: res.data.car.id }))
        .then(() => this.props.alert(messages.carCreateSuccess, 'success'))
        .catch(console.error)
    }

    render () {
      const { handleChange, handleSubmit } = this
      const { car, createdCarId } = this.state
      // console.log(car)

      if (createdCarId) {
        return <Redirect to={`/cars/${createdCarId}`}/>
      }

      return (
        <Layout>
          <CarForm
            car={ car }
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            cancelPath='/'
          />
        </Layout>
      )
    }
}

export default CarCreate
