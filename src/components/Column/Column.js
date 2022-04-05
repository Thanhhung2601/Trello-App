import React from 'react'
import './Column.scss'
import Card from 'components/Card/Card'
import { mapOrder } from 'utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd'
const Column = (props) => {
    const { column } = props
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    const onCardDrop = (dropResult) => {
        console.log(dropResult)
    }

    return (
        <div className="column">
            <header className="column-drag-handle">{column.title}</header>
            <div className="card-list">
                <Container
                    // onDragStart={(e) => console.log('drag started', e)}
                    // onDragEnd={(e) => console.log('drag end', e)}
                    orientation="vertical"
                    groupName="col"
                    onDrop={(e) => onCardDrop(column.id, e)}
                    getChildPayload={(index) => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview',
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => {
                        return (
                            <Draggable key={index}>
                                <Card card={card} />
                            </Draggable>
                        )
                    })}
                </Container>
            </div>
            <footer>Add another card </footer>
        </div>
    )
}

export default Column
