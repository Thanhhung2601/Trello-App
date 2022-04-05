import React, { useEffect, useState } from 'react'
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
    return (
        <div className="board-content">
            {columns.map((column, index) => {
                return <Column key={index} column={column} />
            })}
        </div>
    )
}
export default BoardContent
