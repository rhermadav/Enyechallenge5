import React from 'react';

const ProfileList = (props) =>  {
  // console.log(props.profiles);
  const { profiles } = props;
  console.log(profiles);
 if (profiles === null){
  return <div>hi</div>;
  }
 else return(
      profiles.map((profile ,index) =>{
        return(
        <div key={profile.Email}>
             <h1>
              {profile.FirstName}
            </h1>
          </div>
          )
      } )
     
     );
    
  
  // const myprofiles = props.profiles.map(profile =>{
  //   return(
  //     <div>{profile.firstname}</div>
  //   );
  // })
    // if (profiles.length>0){
    //   return(
    //     profiles.map((profile ,index) =>{
    //       return(
    //       <div key={profile.id}>
    //            <h1>
    //             {profile.firstname}
    //           </h1>
    //         </div>
    //         )
    //     } )
       
    //    );
    // } else {
    //   return <div> no profile yet</div>
    // }
     
}

export default ProfileList;