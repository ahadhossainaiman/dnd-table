import React, { useEffect } from 'react';
import { useState } from 'react';
import BarChart from './BarChart';

const BarChartSection = () => {
    const [items,setItems] = useState([]);
    const [userDeal, setUserDeal] = useState([]);
 
    useEffect(()=>{
        fetch(`https://erp.seopage1.net/api/leads`)
        .then(res=>res.json())
        .then(data=>setItems(data.data))
    },[]);
    useEffect(() => {
      const calculateUserDeal = () => {
        if (items.length > 0) {
          setUserDeal([
            {
              id: 1,
              user: 25,
              userDeal:items.slice(0,24).reduce((total,item)=>total+=item.deal_status,0),
    
            },
            {
              id: 2,
              user: 50,
              userDeal: items.slice(25,49).reduce((total,item)=>total+=item.deal_status,0),
         
            },
            {
              id: 3,
              user: 75,
              userDeal: items.slice(50,74).reduce((total,item)=>total+=item.deal_status,0),
             
            },
            {
              id: 4,
              user: 100,
              userDeal: items.slice(75,99).reduce((total,item)=>total+=item.deal_status,0),
             
            },
            {
              id: 5,
              user: 125,
              userDeal: items.slice(100,124).reduce((total,item)=>total+=item.deal_status,0),
       
            },
            {
                id: 6,
                user: 150,
                userDeal: items.slice(125,149).reduce((total,item)=>total+=item.deal_status,0),
             
              },
              {
                id: 7,
                user: 175,
                userDeal: items.slice(150,174).reduce((total,item)=>total+=item.deal_status,0),
             
              },
              {
                id: 8,
                user: 200,
                userDeal: items.slice(175,199).reduce((total,item)=>total+=item.deal_status,0),
              
              },
              {
                id: 9,
                user: 225,
                userDeal: items.slice(200,224).reduce((total,item)=>total+=item.deal_status,0),
                
              },
              {
                id: 10,
                user: 250,
                userDeal: items.slice(225,249).reduce((total,item)=>total+=item.deal_status,0),
                
              },
              
          ]);
        }
      };
  
      calculateUserDeal();
    }, [items]);
      const dealData = {
        labels: userDeal.map((data) => data.user),
        datasets: [
          {
            label: "Deal Status",
            data: userDeal.map((data) => data.userDeal),
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
    return (
      
             <div style={{ width: 700 }}>
        <BarChart chartData={dealData} />
      </div>
        
    );
};

export default BarChartSection;