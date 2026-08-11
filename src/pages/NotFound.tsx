import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <div className="static-page not-found">
        <h1>404</h1>
        <p>We couldn't find the page you were looking for.</p>
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
