import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ProfileList from './ProfileList';
import SearchBox from './SearchBox';
import Pagination from './Pagination';
import './App.css';

function App () {
    const [loading, setLoading] = useState(false);
    const [profiles , setProfiles] = useState([]);
    const [search ,setSearch] = useState('');
    const [currentPage,setcurrentPage] = useState(1);
    const [profileperPage ,setprofileperPage] = useState(20);
    const [modalVisible, setModalVisible] = useState(false);
    
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
//if loading is false call fetch
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

const openModal = () => {
     setModalVisible(true);
}

  useEffect( () =>{
     fetchData();
  }, []);
// get current profile
  const indexoflastProfile = currentPage * profileperPage;
  const indexoffirstProfile = indexoflastProfile - profileperPage;
  const currentProfile= profiles.slice(indexoffirstProfile, indexoflastProfile);
 // get page number
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
   return(
    <div className='container mt-5'>
        <SearchBox searchange={onSearchChange}/>
        <div>
          <button onClick={openModal}>Open filters</button>
          
          {modalVisible && <div>
            <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="back"
                >
                  Close filter
                </button>
          <h2>sort by sex</h2>
          <button className="btn btn-primary " onClick={onGenderMale}>Male</button>
          <button onClick={onGenderFemale}>Female</button>
          <h2>sort by PaymentMethod</h2>
          <button onClick={moneyorderFilter}>money order</button>
          <button onClick={checkFilter}>check</button>
          <button onClick={paypalFilter}>paypal</button>
          <button onClick={ccFilter}>cc</button>  
            </div>}
          
        </div>
        <ProfileList profiles={currentProfile} loading={loading} />
        <Pagination profileperPage={profileperPage} totalProfiles={profiles.length} paginate={paginate}/> 
     <footer className="mt-5 p-3 text-center bg-light">
       Enye challenge &copy; osarodion uyigue 2021
     </footer>  
   </div>
      );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-P
