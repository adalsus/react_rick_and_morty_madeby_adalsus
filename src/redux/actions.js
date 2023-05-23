const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';
const COPYALLAFAV = 'COPYALLAFAV';

const addFav = (personaje) => {
    const action = {
        type: ADD_FAV,
        payload: personaje
    };
    return action;
};

const removeFav = (id) => {
    const action = {
        type: REMOVE_FAV,
        payload: id
    };
    return action;
};

const copyAllaFav = (allMyFavorites) => {
    const action = {
        type: COPYALLAFAV,
        payload: allMyFavorites
    };
    return action;
}

export {
    ADD_FAV,
    REMOVE_FAV,
    COPYALLAFAV,
    addFav,
    removeFav,
    copyAllaFav
};


//Estudiante: Adalberto Monar