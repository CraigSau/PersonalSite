import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../public/assets/CraigSauersResume2022.pdf';

export default () => (
  <div className="sticky-nav-bar bg-dark" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link to="/">
        <a className="navbar-brand d-flex align-items-center mb-2 mb-md-0 text-light" href="javascript">
          <img src="Website/public/Assets/personalsite.ico" alt="CS" width="=50rem" height="50rem" />
        </a>
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-center">
        <li className="nav-item">
          <Link to="/blog">
            <a
              className="nav-link px-2 text-white"
              href="/Website/public/HTML/blog.html"
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/account">
            <a
              className="nav-link px-2 text-white"
              href="/Website/public/HTML/account.html"
            >
              Account
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-2 text-white"
            href={Resume}
            target="blank"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="text-end">
        <Link to="/login">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-outline-info">Sign-up</button>
        </Link>
      </div>
    </header>
  </div>
);
