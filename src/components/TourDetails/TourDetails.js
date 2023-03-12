import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { Card, Button } from 'react-bootstrap';
import './TourDetails.css'

function TourDetails() {
  const { id } = useParams();
  const cityCard = data.find((e) => e.id === id);
  // let cityCard = info[0];

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