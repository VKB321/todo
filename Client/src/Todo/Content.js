import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './content.css';
import Popup from './Popup';

const Content = () => {
    const [arr, setGetArr] = useState([])
    const [popup, setpopup] = useState(0)
    const [start,setStart]=useState()

    useEffect(() => {
        const authToken = localStorage.getItem("user");
        axios({
            method: "GET",
            url: "https://todopracticea.herokuapp.com/todorouter/get",
            headers: {
                authorization: authToken,
            },
        })
            .then((Data) => {
                console.log(Data.data)
                setGetArr(Data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [popup]);
    return (
        <div className='content-todo'>
            <div>
            <div className='main-table'>
               <table>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Status</th>
                    <th>Time Taken (Hrs : Min : Secs)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    arr.map((item,idx)=>{
                      return (
                        <tr key={idx}>
                          <td>
                           {item.activity}
                          </td>
                          <td>
                           {item.status}
                          </td>
                          <td>
                            {item.time}
                          </td>
                          <td>
                            <button onClick={()=>
                            {
                                let hour = new Date().getHours()
                                let mins = new Date().getHours()
                                let sec = new Date().getHours()
                               
                            }
                            }>Start</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
               </table>
               <button className='add-Btn' onClick={()=>setpopup(1)}>+</button>
{(popup)?<Popup value={setpopup}/>:''}
           </div>
        
            </div>
        </div>
    )
}

export default Content
