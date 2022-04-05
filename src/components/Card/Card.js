import React from 'react'
import './Card.scss'

const Card = (props) => {
    const { card } = props
    console.log(card)
    return (
        <li className="card-item">
            {card.cover && (
                <img src={card.cover} className="card-cover" alt="" />
            )}
            {card.title}
        </li>
    )
}

export default Card
