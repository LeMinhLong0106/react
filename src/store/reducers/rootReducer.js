// state nơi lưu trữ của redux
const initState = {
    users: [
        { id: 'id1', name: 'Long' },
        { id: 'id2', name: 'Tien' },
        { id: 'id3', name: 'Bao' },
    ],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users //copy lại state để tránh mất các dl khác (post); thực hiện ghi đè dl (users) mới
            }
        case 'CREATE_USER':
            let idNew = Math.floor(Math.random() * 1001)
            let userNew = {id: idNew, name: `ramdom: ${idNew}`}
            return {
                ...state, users: [...state.users, userNew]
            }
        default:
            return state;
    }
}

export default rootReducer;