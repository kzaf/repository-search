const initialState = { 
    selectedItem: ''
}

const selectedRepositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_DETAILS_OF_SELECTION":
            return { ...state, selectedRepo: action.selectedItem };
            break;
        default:
            return state;
    }
}

export default selectedRepositoryReducer;