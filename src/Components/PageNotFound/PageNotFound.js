import React from 'react';
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
      <div className="page-not-found">
        <h2 className="error">404</h2>
        <div className="text-container">
            <h2 className='sorry'>we are sorry, page not found!</h2>
        </div>
      </div>
    );
};

export default PageNotFound;