import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Layout from './shared/Layout'
import messages from '../messages'

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
      .then(() => this.props.alert(messages.deleteCarSuccess, 'success'))
      // .catch(err => this.setState({ error: err.message }))
      .catch(() => this.props.alert(messages.deleteCarFailure, 'danger'))
  }

  render () {
    const { car, error, deleted } = this.state

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Review Successfully Deleted' } }
      } />
    }

    if (error) {
      // return <p>ERROR: {error}</p>
    }

    if (!car) {
      return <p>Loading...</p>
    }

    return (
      <Layout>
        <div id="individualReview" className="rounded">
          <header className="d-flex justify-content-between">
            <h4>{car.make} {car.model}</h4>
            <h5 className="grade" >
            Overall Grade:
              <span className={`carGrade ${car.grade.toLowerCase().charAt(0)}`}>{car.grade}</span>
            </h5>
          </header>
          <div>
          Year: {car.year}
          </div>
          <div>
          Type: {car.vehicle_type}
          </div>
          <div>
            Owner Review:
            {car.description}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div>
              <button onClick={this.destroy} type="submit" className="btn btn-danger mr-1">Delete Review</button>
              <Link to={`/cars/${this.props.match.params.id}/edit`}>
                <button className="btn btn-warning">Edit Review</button>
              </Link>
            </div>
            <Link to="/cars" className="btn btn-primary">Back to all Reviews</Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(Car)
