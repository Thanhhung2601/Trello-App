export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Learn ReactJs',
                    cardOrder: [
                        'card-1',
                        'card-2',
                        'card-5',
                        'card-4',
                        'card-3',
                    ],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 1',
                            cover: null,
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 2',
                            cover: null,
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 3',
                            cover: null,
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 4',
                            cover: null,
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 5',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Learn NextJs',
                    cardOrder: ['card-8', 'card-7', 'card-6'],
                    cards: [
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 6',
                            cover: null,
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 7',
                            cover: null,
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 8',
                            cover: null,
                        },
                    ],
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Learn Django',
                    cardOrder: ['card-9', 'card-10', 'card-11'],
                    cards: [
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 9',
                            cover: null,
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 10',
                            cover: null,
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'This is title card 11',
                            cover: null,
                        },
                    ],
                },
            ],
        },
    ],
}
