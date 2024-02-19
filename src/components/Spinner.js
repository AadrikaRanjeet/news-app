import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner =()=> {
 
    return (
      <div className="text-center my-16">
        <img src={loading} alt="loading-spinner" />
        </div>
    )
  
}
export default Spinner