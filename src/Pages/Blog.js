import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import firstLittle from '../assets/service-details-1.jpg';
import secondLittle from '../assets/service-details-3.jpg';
import thirdLittle from '../assets/resume.jpg';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className = "mt-5">My blog</h1>
        </div>
        <Card>
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src={firstLittle}
                alt="Card cap"
                class="img-thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={secondLittle}
                alt="Card cap"
                class="img-thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={thirdLittle}
                alt="Card cap"
                class="img-thumbnail"
              />
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
