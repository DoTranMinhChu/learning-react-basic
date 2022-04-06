const initState = {
    users: [
        { id: 1, name: 'user 001' },
        { id: 2, name: 'user 002' }
    ],
    admin: [
        { id: 1, name: 'MinhChu' }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(">> Check action :", action)
    let users = state.users;
    switch (action.type) {
        case 'DELETE_USER':
            users = users.filter((user) => user.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            users = [...users, action.payload];
            return {
                ...state, users
            };

        default:
            return state;
    }

}

export default rootReducer