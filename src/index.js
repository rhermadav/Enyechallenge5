import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ProfileList from './ProfileList';
import SearchBox from './SearchBox';

function App () {
    const [profiles , setProfiles] = useState(null);
    const [search ,setSearch] = useState('');
    const fetchData = async () => {
      const response = await Axios.get('https://api.enye.tech/v1/challenge/records')
      setProfiles(response.data.records.profiles) 
      console.log(response.data.records.profiles);
  }
   const  onSearchChange = (e) =>{
     if(e.target.value.length === 0){
      fetchData();
     }
     else{
      setSearch(e.target.value);
      const searchedArray = profiles.filter((profile) => {
       return profile.FirstName.toLowerCase().includes(search.toLowerCase())
      }
      )
      console.log(searchedArray.length);
      setProfiles(searchedArray);
      console.log(e.target.value);
     }}

     const  onGenderMale = () =>{

       const maleArray = profiles.filter((profile) => {
       return profile.Gender.includes('Male')
      }
      )
      console.log(maleArray.length);
      setProfiles(maleArray);
     }
  const  onGenderFemale = () =>{
      const femaleArray = profiles.filter((profile) => {
    return profile.Gender.includes('Female')
   })
   console.log(femaleArray.length);
   setProfiles(femaleArray);
  }

  const  paypalFilter= () =>{
    const paypalArray = profiles.filter((profile) => {
  return profile.PaymentMethod.includes('paypal')
 })
 console.log(paypalArray.length);
 setProfiles(paypalArray);
}

const  ccFilter= () =>{
  const ccArray = profiles.filter((profile) => {
return profile.PaymentMethod.includes('cc')
})
console.log(ccArray.length);
setProfiles(ccArray);
}

const  checkFilter= () =>{
  const checkArray = profiles.filter((profile) => {
return profile.PaymentMethod.includes('check')
})
console.log(checkArray.length);
setProfiles(checkArray);
}

const  moneyorderFilter= () =>{
  const moneyorderArray = profiles.filter((profile) => {
return profile.PaymentMethod.includes('money')
})
console.log(moneyorderArray.length);
setProfiles(moneyorderArray);
}

  useEffect( () =>{
     fetchData();
  }, []);
   return(
    <div>
        <SearchBox searchange={onSearchChange}/>
        <div>
          <h1>filter by  gender</h1>
          <button onClick={onGenderMale}>Male</button>
          <button onClick={onGenderFemale}>Female</button>
          <button onClick={moneyorderFilter}>money order</button>
          <button onClick={checkFilter}>check</button>
          <button onClick={paypalFilter}>paypal</button>
          <button onClick={ccFilter}>cc</button>  
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
