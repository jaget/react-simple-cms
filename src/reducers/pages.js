import pages from '../data/pages';

const INITIAL_STATE = {
    pages: pages
};

export default function reducer(state = INITIAL_STATE, action){
    console.log(action);
    switch (action.type) {
        case 'ADD_PAGE': {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return state;
        }
    }
}