import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import data from '../../data/data.json'
import './Tours.css'

export default function Tours() {
  const navigate = useNavigate();

  return (
    <div className="tourspage">
      <h2>Which place would you like to know about:</h2>
      <div className="tours">
      {data.map((element) => {
        return (
          <div key={element.id}>
            <Button className="buttonindiv" variant="primary" size="lg" onClick={() => navigate(`/city/${element.id}`)}>
              {element.name}
            </Button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

// import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom';


// import './Body.css'

// function Body() {
//     const navigate = useNavigate();
//     navigate('/city');
//     return (
//         <div className='body'>
//             <h1>Hello and welcome to my travel website!</h1>
//             <div className="mb-2">
//                 <Button onClick={useNavigate} variant="primary" size="lg" href="/city/">
//                     Get Started >
//                 </Button>{' '}
//             </div>
//         </div>
//     )
// }

// export default Body