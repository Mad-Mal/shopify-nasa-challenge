import { useState, useEffect } from 'react';
import axios from 'axios';
import './DataCard.css';
import LikeBtn from './LikeBtn';

function DataCards() {

//State
const [data, setData] = useState([]);

//Fetching data
useEffect(() => {
  const getData = () => {
    axios
      .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=eIh43nP9MGTsFfZg3b9cVXYxIPftLFKh1y9aVLH9')
        .then (res => {
          // console.log(res.data.photos)
          setData(res.data.photos)        
        })
        .catch(error => {
          console.log('API Error', error)
        })
  }
  getData()
},[])

return (
  <div className='outerWrap'>
    {data.map((data) => 
      <div className='innerDataWrap' key={data.id}>
        <img className='imgs' src={data.img_src} alt="images from NASA's Mars rovers API" />
        <div className='outerParaContainer'>
          <div className='paraContainer'>
            <div className='firstPWrap'>
              <p className='pTags'>Date: {data.earth_date}</p>
              <p className='pTags'>Rover Name: {data.rover.name}</p>
              <p className='pTags'>Status: {data.rover.status}</p>
            </div>
            <div className='secondPWrap'>
              <p className='pTags'>Launch Date:  {data.rover.launch_date}</p>
              <p className='pTags'>Landing date: {data.rover.landing_date}</p>
            </div>
          </div>
          <div className='btnWrap'>
            <LikeBtn myKey={data.id}/>
          </div>
        </div>
      </div>)}
  </div>
)

}

export default DataCards