const ADD_FAV = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';

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

export {
    ADD_FAV,
    REMOVE_FAV,
    addFav,
    removeFav
};


//Estudiante: Adalberto Monar