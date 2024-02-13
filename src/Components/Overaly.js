import React from "react";
import { Carousel } from "react-bootstrap";

const Overaly = () => {
  return (
    <div className="crous">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w1280/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w1280/criPrxkTggCra1jch49jsiSeXo1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w1280/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Overaly;
