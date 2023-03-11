import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Home() {

    return (
        <div className='body'>
            <h1>Hello and welcome to my travel website!</h1>
            <div className="mb-2">
                <Button onClick={useNavigate} variant="primary" size="lg" href="/city">
                    Get Started >
                </Button>{' '}
            </div>
        </div>
    )
}


export default Home