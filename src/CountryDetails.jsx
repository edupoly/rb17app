import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function CountryDetails() {
  var {cname} = useParams();
  var navigate = useNavigate();

  const [details, setDetails] = useState({})
  useEffect(()=>{
    fetch(`https://restcountries.com/v2/name/${cname}`)
    .then(res=>res.json())
    .then(data=>{
      setDetails({...data[0]})
    })
  },[cname])
  function gotoHome(){
    navigate("/")
  }
  return (
    <div>
      <h1>CountryDetails of {cname} <button onClick={gotoHome}>Home</button></h1>
      <img src={details.flag} width="300px"></img>
      <h3>Population:{details.population}</h3>
    </div>
  )
}

export default CountryDetails