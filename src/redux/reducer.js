import { ADD_FAV, REMOVE_FAV, COPYALLAFAV } from './actions.js';

import { fn_retIndex } from '../js/fns/fnsApp.js';

const initialState = {
    myFavorites: [],
    allMyFavorites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAV:

            /*state.myFavorites.push(action.payload);*/
            //O usando .assign
            Object.assign( state.myFavorites, [...state.myFavorites, action.payload] )

            /*state.allMyFavorites.push(action.payload);*/
            //O usando .assign
            Object.assign( state.allMyFavorites, [...state.allMyFavorites, action.payload] )

            return {
                ...state
                /*, myFavorites: [ ...state.myFavorites, action.payload ]*/
            }

        case REMOVE_FAV:

            let posID = fn_retIndex(action.payload - 0, state.myFavorites);
            state.myFavorites.splice(posID, 1);
            posID = fn_retIndex(action.payload - 0, state.allMyFavorites);
            state.allMyFavorites.splice(posID, 1);

            return { ...state };
        
        case COPYALLAFAV:
            //Blanqueo a .myFavorites
            state.myFavorites.splice(0, state.myFavorites.length);
            //Copy todo lo de .allMyFavorites o lo filtrado a .myFavorites
            Object.assign( state.myFavorites, [...action.payload] );
            return { ...state };
        

            
        default:
            return { ...state };

    }
}//Estudiante: Adalberto Monar

export default reducer;