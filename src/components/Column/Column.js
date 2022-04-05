import React from 'react'
import './Column.scss'
import Task from 'components/Task/Task'

const Column = () => {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
                <li className="task-item">Keep Learning reactjs</li>
            </ul>
            <footer>Add another card </footer>
        </div>
    )
}

export default Column
