import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const CarForm = ({ car, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit} id="form1">

    <label>Vehicle Make</label>
    <input
      className="form-control"
      required
      placeholder="Make"
      value={car.make}
      name="make"
      onChange={handleChange}
    />

    <label>Vehicle Model</label>
    <input
      className="form-control"
      required
      placeholder="Model"
      value={car.model}
      name="model"
      onChange={handleChange}
    />

    <label>Vehicle Year</label>
    <input
      className="form-control"
      required
      placeholder="Year"
      value={car.year}
      name="year"
      onChange={handleChange}
    />

    <label>Vehicle Type</label>
    <input
      className="form-control"
      required
      placeholder="Type"
      value={car.vehicle_type}
      name="vehicle_type"
      onChange={handleChange}
    />

    <label>Overall Vehicle Grade</label>
    <input
      className="form-control"
      required
      placeholder="Grade"
      value={car.grade}
      name="grade"
      onChange={handleChange}
    />

    <label>Review</label>
    <textarea
      className="form-control"
      required
      rows="3"
      value={car.description}
      name="description"
      onChange={handleChange}
    ></textarea>

    <button type="submit" className="btn btn-success" id="submitReview">Submit</button>
    <Link to={cancelPath}>
    </Link>
  </Form>

  // <button>Cancel</button>
)

export default CarForm
