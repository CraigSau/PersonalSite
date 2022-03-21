import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container rounded bg-dark mt-5">
    <div className="row">
      <div className="page-cont col-md-4 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3">
          <img className="rounded-circle mt-5" src="/#" alt="profile img" width="90" />
        </div>
        <div className="col-md-8">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-row align-items-center back">
                <i className="fa fa-long-arrow-left mr-1 mb-1" />
                <Link to="/" className="home-link">
                  <h6>
                    Back to Home
                  </h6>
                </Link>
              </div>
              <h6 className="text-right">
                Edit Profile
              </h6>
            </div>
            <div className="row mt-2">
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
            <div className="row mt-3">
              <div>
                <input type="text" className="form-control" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="mt-5 text-right">
            <button className="btn btn-primary profile-button" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
