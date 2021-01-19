import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ProfileList from './ProfileList';

function App () {
    const [profiles , setProfiles] = useState(null);
    const fetchData = async () => {
      const response = await Axios.get('https://api.enye.tech/v1/challenge/records')
      setProfiles(response.data.records.profiles) 
      console.log(response.data.records.profiles);
  }
  useEffect( () =>{
     fetchData();
  }, []);
   return(
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
             <p  className="navbar-brand">Profile  Finder</p>
          </div>
       </nav>
        <div  className="container searchContainer">
           <div className="search card card-body">
             <h1>Search  Users profiles</h1>
              <p className="lead">Enter a username to fetch a user profile </p>
           <input type="text" id="searchUser" className="form-control" placeholder="User Username..." />
        </div>
        <br />
        {/* <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button> */}
          </div>
        <ProfileList profiles={profiles} />
        
     <footer className="mt-5 p-3 text-center bg-light">
       Enye challenge &copy; 2021
     </footer>  
   </div> 
      );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-P
