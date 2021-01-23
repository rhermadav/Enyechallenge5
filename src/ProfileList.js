import React from 'react';

const ProfileList = (props) =>  {
  // console.log(props.profiles);
  const { profiles ,loading } = props;
  console.log(profiles);
 if (loading){
  return <div>hi</div>;
  }
 else return(
      profiles.map((profile ,index) =>{
        return(
          <div className="card card-body mb-3" key={profile.Email}>
          <div className="row">
            <div className="col-md-3">
              <button  target="_blank" className="btn btn-primary btn-block mb-4">View Profile</button>
              <span className="badge badge-primary  mb-4 mypad ">Gender: {profile.Gender}</span>
              <span className="badge badge-secondary mypad">CreditCardType: {profile.CreditCardType}</span>
            </div>
            <div className="col-md-9">
              
              <span className="badge badge-success">DomainName: {profile.DomainName}</span>
              <span className="badge badge-info">Email: {profile.Email}</span>
              <br />
              <ul className="list-group">
                <li className="list-group-item">FirstName: {profile.FirstName}</li>
                <li className="list-group-item">CreditCardNumber: {profile.CreditCardNumber}</li>
                <li className="list-group-item">LastLogin: {profile.LastLogin}</li>
                <li className="list-group-item">LastName: {profile.LastName}</li>
                <li className="list-group-item">Latitude: {profile.Latitude}</li>
                <li className="list-group-item">Longitude: {profile.Longitude}</li>
                <li className="list-group-item">MacAddress: {profile.MacAddress}</li>
                <li className="list-group-item">PaymentMethod: {profile.PaymentMethod}</li>
                <li className="list-group-item">PhoneNumber: {profile.PhoneNumber}</li>
                <li className="list-group-item">URL: {profile.URL}</li>
                <li className="list-group-item">UserName: {profile.UserName}</li>
              </ul>
            </div>
          </div>
        </div>
          )
      } )
     
     );
    }

export default ProfileList;