// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import data from '../../../data/data.json';
// import { Card, Button } from 'react-bootstrap';

// function TourDetails() {
//   const { id } = useParams();
//   const info = data.filter((e) => e.id === id);
//   let cityCard = info[0];

//   const [showMore, setShowMore] = useState(false);

//   const handleShowMoreClick = () => {
//     setShowMore(!showMore);
//   }

//   return (
//     <div>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={cityCard.image} />
//         <Card.Body>
//           <Card.Title>{cityCard.name}</Card.Title>
//           <Card.Text>
//             {showMore ? cityCard.info : `${cityCard.info.substring(0, 100)}...`}
//           </Card.Text>
//           <Button onClick={handleShowMoreClick}>
//             {showMore ? "Show less" : "Show more"}
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }

// export default TourDetails;