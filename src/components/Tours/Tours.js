import React from 'react'
import './Tours.css'
const data = require('../../data/data.json')

function Tours() {
    return (
        <div 
            className="tours">
            {data.map((element) => {
                return (
                    <div
                        id={element.id}
                        className="tours container">
                        <img src={element.image} alt={element.name}/>
                        <p>{element.name}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tours