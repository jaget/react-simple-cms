import pages from '../data/pages';

const INITIAL_STATE = {
    pages: pages
};

export default function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_PAGE': {
            return [
                ...state,
                action.payload
            ]
        }
        case 'EDIT_PAGE': {
            let newState = [
                ...state
            ];
            newState[action.id] = action.payload;
            return newState;
        }
        case 'DELETE_PAGE': {
            let newState = [
                ...state
            ];
            delete newState[action.id];
            return newState;
        }
        default: {
            return state;
        }
    }
}