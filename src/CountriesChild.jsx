import React from 'react'
import { useState,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function CountriesChild() {
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
      <h1>Countries within</h1>
      <div className='d-flex'>
        <div className='w-50' style={{maxHeight:"300px",overflow:"scroll"}}>
          {
            countries && countries.map((country)=>{
              return <li>
                <Link to={`/countriesChild/countryDetails/${country.name}`}>{country.name}</Link>
              </li>
            })
          }
        </div>
        <div className='w-50'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default CountriesChild