const initialState = { text: '' }

const repositorySearchReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "UPDATE_QUERY":
            return { ...state, text: action.payload };
            break;
        case "RESET_QUERY":
            return { ...state, text: '' };
            break;
        default:
            return state;
    }
}

export default repositorySearchReducer;