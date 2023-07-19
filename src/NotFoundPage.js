import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return ( 
        <div className="not-found" id="notFoundPage">
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            <Link class="btn btn-dark" to="/seg3125_project2_final">Go Back to the Homepage</Link>
        </div>
    );
}

export default NotFoundPage;