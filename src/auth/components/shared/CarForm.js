import React from 'react'
import { Link } from 'react-router-dom'

const CarForm = ({ car, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>

    <label>Vehicle Make</label>
    <input
      placeholder="Make"
      value={car.make}
      name="make"
      onChange={handleChange}
    />

    <label>Vehicle Model</label>
    <input
      placeholder="Model"
      value={car.model}
      name="model"
      onChange={handleChange}
    />

    <label>Vehicle Year</label>
    <input
      placeholder="Year"
      value={car.year}
      name="year"
      onChange={handleChange}
    />

    <label>Vehicle Type</label>
    <input
      placeholder="Type"
      value={car.vehicle_type}
      name="vehicle_type"
      onChange={handleChange}
    />

    <label>Overall Vehicle Grade</label>
    <input
      placeholder="Grade"
      value={car.grade}
      name="grade"
      onChange={handleChange}
    />

    <button type="submit" className="btn btn-success">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>

)

export default CarForm
