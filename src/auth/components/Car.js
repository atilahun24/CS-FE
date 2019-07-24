import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Layout from './shared/Layout'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class Car extends Component {
  constructor (props) {
    super(props)

    this.state = {
      car: null,
      error: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/cars/${this.props.match.params.id}`)
      .then(res => this.setState({ car: res.data.car }))
      .catch(err => this.setState({ error: err.stack }))
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/cars/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { car, error, deleted } = this.state

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Review Successfully Deleted' } }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    if (!car) {
      return <p>Loading...</p>
    }

    return (
      <Layout>
        <h4>{car.make} {car.model}</h4>
        <div>
          Year: {car.year}
        </div>
        <div>
          Type: {car.vehicle_type}
        </div>
        <h5 className="grade" >
          Overall Grade: {car.grade}
        </h5>
        <div>
          {car.description}
        </div>
        <Link to="/cars">Back to all Reviews</Link>
        <button onClick={this.destroy} type="submit" className="btn btn-danger">Delete Review</button>
        <Link to={`/cars/${this.props.match.params.id}/edit`}>
          <button className="btn btn-secondary">Edit Review</button>
        </Link>
      </Layout>
    )
  }
}

export default withRouter(Car)
