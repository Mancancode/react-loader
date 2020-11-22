import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/home/Header'
import HouseNames from './components/House/HouseNames'
import './App.css';



const App = () => {

  const [items, setItems] = useState([]) //this will represent the items that will be coming from the API
  const [isLoading, setLoading] = useState(true)
   
  useEffect (() => {
    const getItems =  async () =>{
      const result = await axios (
        `https://www.anapioficeandfire.com/api/houses` //Endpoint and parameter or base Url
        )
      console.log(result.data)

      setItems(result.data)//sets the data to appear 
      setLoading(false) //stop loading when data is fetched
    }
    getItems()

  }, [])//when we use useEffect we put dependency as a second paramers

  return  ( <div className="container">
    <Header/>
    <HouseNames isLoading ={isLoading} items = {items}/>
  </div> )

}

export default App;
