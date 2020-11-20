import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Loader from './components/home/Loader'
import './App.css';



const App = () => {

  const [qoutes, qoutessetQoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const lyricsfunction =  async () => {

    try {
      // eslint-disable-next-line
      const data = await axios
        .get(`https://game-of-thrones-quotes.herokuapp.com/v1/random`)
        .then(res => {
          console.log(res);
          qoutessetQoutes(res.data.qoutes);
        });
        setIsLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
  
 
  useEffect (() => {
    lyricsfunction ();
    }, []);

  return   (
  <div className="App">
   {qoutes}
   {isLoading ? (qoutes) : ( <Loader/>)}
   </div>);

};

export default App;
