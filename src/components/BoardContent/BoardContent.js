import React, { useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './BoardContent.scss'
import Column from 'components/Column/Column'
import { initialData } from 'actions/initialData'
import { isEmpty } from 'lodash'
import { mapOrder } from 'utilities/sorts'

const BoardContent = () => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDb = initialData.boards.find(
            (board) => board.id === 'board-1'
        )
        if (boardFromDb) {
            setBoard(boardFromDb)
            //sort column

            setColumns(
                mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id')
            )
        }
    }, [])
    if (isEmpty(board)) {
        return <div>Not found</div>
    }

    const onColumnDrop = (dropResult) => {
        console.log(dropResult)
    }

    return (
        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={(index) => columns[index]}
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'column-drop-preview',
                }}
            >
                {columns.map((column, index) => {
                    return (
                        <Draggable key={index}>
                            <Column column={column} />
                        </Draggable>
                    )
                })}
            </Container>
        </div>
    )
}
export default BoardContent
