import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './Tour.css'

export default function Tour(props) {
  const navigate = useNavigate();
  return (
      <Button className="buttonindiv" variant="primary" size="lg" onClick={() => navigate(`/city/${props.tour.id}`)}>
        {props.tour.name}
      </Button>
  )
}