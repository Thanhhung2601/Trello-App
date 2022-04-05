import React from 'react'
import './Card.scss'

const Card = (props) => {
    const { card } = props
    return (
        <div className="card-item">
            {card.cover && (
                <img
                    src={card.cover}
                    className="card-cover"
                    alt=""
                    onMouseDown={(event) => event.preventDefault()}
                />
            )}
            {card.title}
        </div>
    )
}

export default Card
