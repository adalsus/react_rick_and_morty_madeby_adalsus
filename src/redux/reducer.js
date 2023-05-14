import { ADD_FAV, REMOVE_FAV } from './actions.js';

import { fn_retIndex } from '../js/fns/fnsApp.js';

const initialState = {
    myFavorites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [ ...state.myFavorites, action.payload ]
            }
        case REMOVE_FAV:
            let posID = fn_retIndex(action.payload-0, state.myFavorites);
            state.myFavorites.splice(posID, 1);
            return { ...state };
        default:
            return { ...state };
    }
}//Estudiante: Adalberto Monar

export default reducer;