import React from 'react';

const SearchBox = (props) =>  {
  const { searchange } = props;
    return(
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
             <p  className="navbar-brand"> osarodion uyigue Finder</p>
          </div>
        </nav>
         <div  className="container searchContainer">
            <div className="search card card-body">
              <h1>Search  Users profiles</h1>
              <p className="lead">Enter users firstname to fetch a user profile </p>
            <input type="text" id="searchUser" className="form-control" placeholder="User Firstname..." onChange={searchange}/>
           </div>
        <br />
         </div>
      </div>
    );
}

export default SearchBox;