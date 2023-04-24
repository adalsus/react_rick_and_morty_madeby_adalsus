import axios from 'axios';

const fn_ldstime = () => {
    let today = new Date()
    let lds = ((today.getSeconds()+'').slice(-1))-0;
    return lds;
}
const random0_9 = (min =0, max=10) => Math.floor(Math.random() * (max - min)) + min;

const fn_hayID = (dato, coleccion) => {
    const cari=[];
    for (let pers of coleccion) {
        if (pers.id===dato) {
            cari.push(pers.id);
            cari.push(pers.name);
            break;
        }
    }
    return cari;
}

const fn_retIndex = (id, coleccion) => {
    let rI;
    for (let i in coleccion) {
        if (id===coleccion[i].id) {
            rI=i;
            break;  
        }
    }
    return rI;
} 

const randomMin_Max = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const asignarA = (coleccion) => {
    const idsRandom = [];
    const coleccionRandom = [];
    while (idsRandom.length !== coleccion.length) {
        const idRandom = randomMin_Max(1, 826 + 1);
        const cromo = fn_hayID(idRandom, idsRandom);
        if (cromo.length === 0) {
            const obj_id = {
                id: idRandom
            }
            idsRandom.push(obj_id);
            
            axios(`https://rickandmortyapi.com/api/character/${idRandom+''}`)
            .then(
                ({ data }) => {
                    const obj_data = {
                        id: (data.id) - 0,
                        name: data.name,
                        status: data.status,
                        species: data.species,
                        gender: data.gender,
                        origin: data.origin,
                        image: data.image,
                    }
                    coleccionRandom.push(obj_data);
                    if (coleccionRandom.length===coleccion.length) {
                        let i=-1;                       
                        for (let elem of coleccionRandom) {
                           coleccion[++i] = elem;
                        }
                    }
                }
            )
        }
    }
}

export { fn_ldstime, random0_9, fn_hayID, fn_retIndex, asignarA }