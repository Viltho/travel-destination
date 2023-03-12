import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import data from '../../data/data.json'
import './Tours.css'
import Tour from './Tour/Tour';

export default function Tours() {
  const navigate = useNavigate();

  return (
    <div className="tourspage">
      <h2>Which place would you like to know about:</h2>
      <div className="tours">
      {data.map((element) => {
        return (
          <div key={element.id}>
           <Tour tour={element}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}