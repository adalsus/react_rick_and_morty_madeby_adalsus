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

export { fn_ldstime, random0_9, fn_hayID, fn_retIndex }