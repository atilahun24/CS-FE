import React from 'react'
import { Link } from 'react-router-dom'

const CarForm = ({ car, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit} id="form1">

    <label>Vehicle Make</label>
    <input
      required
      placeholder="Make"
      value={car.make}
      name="make"
      onChange={handleChange}
    />

    <label>Vehicle Model</label>
    <input
      required
      placeholder="Model"
      value={car.model}
      name="model"
      onChange={handleChange}
    />

    <label>Vehicle Year</label>
    <input
      required
      placeholder="Year"
      value={car.year}
      name="year"
      onChange={handleChange}
    />

    <label>Vehicle Type</label>
    <input
      required
      placeholder="Type"
      value={car.vehicle_type}
      name="vehicle_type"
      onChange={handleChange}
    />

    <label>Overall Vehicle Grade</label>
    <input
      required
      placeholder="Grade"
      value={car.grade}
      name="grade"
      onChange={handleChange}
    />

    <label>Review</label>
    <input
      required
      placeholder="Write Your Review Here"
      value={car.description}
      name="description"
      onChange={handleChange}
    />

    <button type="submit" className="btn btn-success">Submit</button>
    <Link to={cancelPath}>
    </Link>
  </form>

  // <button>Cancel</button>
)

export default CarForm
