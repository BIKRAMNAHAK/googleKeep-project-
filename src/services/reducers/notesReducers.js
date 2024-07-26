const Initialstate = {
    notes: [],
    note: null,
    errMsg: null,
    isSuc: false
};

function notesReducers(state = Initialstate, action) {
    switch (action.type) {
        case 'GETDATASUC':
            console.log("notes1",action.payload);
            return {
                ...state,
                notes: action.payload,
                isSuc: true
            };
       
        default:
            return state;
    }
}

export default notesReducers;
