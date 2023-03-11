import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data/data.json';
import { Card, Button } from 'react-bootstrap';
import './Tour.css'

function TourDetails() {
  const { id } = useParams();
  const info = data.filter((e) => e.id === id);
  let cityCard = info[0];

  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  }

  return (
    <div className='cardsindiv' style={{
      backgroundImage: `url(${cityCard.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'blur(0px)'
    }}><div>
        <Card style={{ width: '70rem', filter: 'none'}}>
          <div className="realcardsindiv">
            <div>
              <Card.Img style={{ maxHeight: '400px' }} variant="top" src={cityCard.image} />
            </div>
            <div>
              <Card.Body style={{ width: '35rem' }}>
                <Card.Title>{cityCard.name}</Card.Title>
                <Card.Text>
                  {showMore ? cityCard.info : `${cityCard.info.substring(0, 100)}...`}
                </Card.Text>
                <Button onClick={handleShowMoreClick}>
                  {showMore ? "Show less" : "Show more"}
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default TourDetails;

// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { ListGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'
// import data from '../../data/data.json'

// export default function Tours() {
//   const navigate = useNavigate();

//   return (
//     <div className="tours">
//       <ListGroup className="listgroupofplaces">
//         {data.map((element) => {
//           return (
//             <div key={element.id}>
//               <ListGroup.Item>
//                 <Button variant="primary" size="lg" onClick={() => navigate(`/city/${element.id}`)}>
//                   {element.name}
//                 </Button>
//               </ListGroup.Item>
//             </div>
//           )
//         })}
//       </ListGroup>  
//     </div>
//   )
// }