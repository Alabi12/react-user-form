
const initialstate = {
    user: [{
        name: "Robert",
        email: "ralabi@gmail.com",
        gen: "18"
    }],
}

const UserReducer = (state={initialstate}, action) => {
    switch(action.type) {
        case "ADD_USER":
        return state

        default:
            return state;
    }
}

export default UserReducer;

