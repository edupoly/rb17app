import React from 'react'
import { connect } from 'react-redux'
import { getCountries } from './store/actions/countries.actions'

function Countries(props) {
  console.log(props)
  return (
    <div>
      Countries
      <button onClick={()=>{props.loadCountries()}}>Load Countries</button>
      <ul>
        {
          props.countries.map((country)=>{
            return <li>{country.name}</li>
          })
        }
      </ul>
    </div>
  )
}
function mapStateToProps(state){
  return state.countries
}
function mapDispatchToProps(dispatch){
  return{
    loadCountries:()=>{dispatch(getCountries())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countries)