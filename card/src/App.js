import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from "./Card";
import "./App.css"

const App = () => {
   const [data, setData] = useState([]);
    console.log(data)
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
            console.log(response.data)
            setData(response.data);
         } catch (err) {
            console.log("Error :", err);
         }
      };

      fetchData();
   }, []);

   console.log(data)

   return (
      <>
      <div className="container">
      {data.map((items)=>(
          <Card songs ={items.songs} image={items.image} follows={items.follows} title={items.title}/>
        ))}

      </div>
      
      </>
   );
};

export default App;
