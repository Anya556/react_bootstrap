import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import firstImg from '../assets/1.jpg';
import secondImg from '../assets/2.jpg';
import thirdImg from '../assets/3.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <div >
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={firstImg} alt="Woman" />
            <Carousel.Caption>
              <h3>A happy woman</h3>
              <p>
                A woman received an invitation for an
                interview.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={secondImg}
              alt="A man has an interview"
            />
            <Carousel.Caption>
              <h3>A man having remote interviews</h3>
              <p>A man with laptop having remote interview.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={thirdImg}
              alt="A man received Job offer"
            />
            <Carousel.Caption>
              <h3>A man received Job offer</h3>
              <p>A happy man reading a letter with Job offer.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
