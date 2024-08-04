const Initialstate = {
    notes: [],
    errMsg: null,
    isSuc: false,
    isloading: false
};

function notesReducers(state = Initialstate, action) {
    switch (action.type) {
        case 'GETDATASUC':
            console.log("notes1", action.payload);
            return {
                ...state,
                notes: action.payload,
                isSuc: true
            };

        case "DELETEALLNOTES":
            return {
                ...state,
                notes: []
            }
        default:
            return state;
    }
}

export default notesReducers;
