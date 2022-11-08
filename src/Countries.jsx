import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
    })
  },[])
  return (
    <div>
      <h1>Countries</h1>
      {
        countries && countries.map((country)=>{
          return <li>
            <Link to={`/countryDetails/${country.name}`}>{country.name}</Link>
          </li>
        })
      }
    </div>
  )
}

export default Countries