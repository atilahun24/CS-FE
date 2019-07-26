import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => (
  <Carousel interval={5000} style={{ height: '100vh' }}>
    <Carousel.Item style={{ height: '100%' }}>
      <img style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        className="d-block w-100"
        src="8c.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>2009 Alfa Romeo 8C</h3>
        <p>{'"The car is fast – about 911 GT3 fast – and also really responsive. Body roll is almost non-existent, and throttle response is top-notch. Also, the cars value has appreciated significantly since I purchased it."' }         -Tom, NYC</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: '100%' }}>
      <img style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        className="d-block w-100"
        src="gti.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>2014 VW GTI</h3>
        <p>{'"Simply amazing car... the 2.0 Turbo is quick. It is strong all through the rev range, very little turbo lag.  It has an Audi-grade interior and fit/finish, love the plaid seats and they are very comfortable (and heated!). This is the only car on the planet that I prefer the automatic over a stick; the DSG is brilliant! My car also has the Pirelli tires as opposed to the Dunlops. The GTI is a ball to drive, but civilized, too. 10/10, would buy again."'} -Calvin, Boston</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: '100%' }}>
      <img style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        className="d-block w-100"
        src="r8.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>2018 Audi R8</h3>
        <p>
          {'"I loved the Audi R8 from the start. This car definitly turns heads and its a great mixture of a super car with German and Italian design. You have the reliability of German with Italian influence."'}

            -Chris, Newport Beach
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Home
