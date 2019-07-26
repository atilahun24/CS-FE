import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from './shared/Layout'

class CarEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
        make: '',
        model: '',
        year: '',
        vehicle_type: '',
        grade: ''
      },
      edited: false
    }
  }

  componentDidMount () {
    // to get and use your own time zone, use getTimezoneOffset
    axios(`${apiUrl}/cars/${this.props.match.params.id}`)
      .then(res => {
        // const dateObj = new Date(res.data.book.firstPublished)
        // const formattedDate = dateObj.toISOString().substring(0, 10)
        this.setState({ car: {
          ...res.data.car
          // firstPublished: formattedDate
        }
        })
      })
      .catch(console.error)
  }

  handleChange = event => {
    this.setState({ car:
      {
        ...this.state.car,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/cars/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { car: this.state.car }
    })
      // .then(() => this.props.history.push(`/cars/${this.state.car._id}`))
      .then(() => this.setState({ edited: true }))
      .then(() => this.props.alert('You edited your review!', 'success'))
      .catch(() => this.props.alert('You cannot change another users review', 'danger'))
  }

  render () {
    // const handleChange = this.handleChange
    // const handleSubmit = this.handleSubmit
    // the following line is basically the same as the two lines above ^
    const { handleChange, handleSubmit } = this
    const { car, edited } = this.state
    // this will allow you to see every single letter typed in the form
    // console.log(this.state)

    if (edited) {
      return <Redirect to={
        {
          pathname: `/cars/${this.props.match.params.id}`
        }
      }/>
    }

    return (
      <Layout md="8" lg="6" className="form1">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Make</Form.Label>
            <Form.Control
              type="text"
              placeholder="Make"
              name="make"
              onChange={handleChange}
              value={car.make}
            />
          </Form.Group>

          <Form.Group controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Model"
              name="model"
              onChange={this.handleChange}
              value={car.model}
            />
          </Form.Group>

          <Form.Group controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="Year"
              name="year"
              onChange={this.handleChange}
              value={car.year}
            />
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vehicle Type"
              name="vehicle_type"
              onChange={this.handleChange}
              value={car.vehicle_type}
            />
          </Form.Group>

          <Form.Group controlId="grade">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Grade"
              name="grade"
              onChange={this.handleChange}
              value={car.grade}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              onChange={this.handleChange}
              value={car.description}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Layout>
    )
  }
}

// it wraps it in router, so EditBook gets all the stuff you pass it from App.js
export default withRouter(CarEdit)
