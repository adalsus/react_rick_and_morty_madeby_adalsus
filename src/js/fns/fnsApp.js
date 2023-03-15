const fn_ldstime = () => {
    let today = new Date()
    let lds = ((today.getSeconds()+'').slice(-1))-0;
    return lds;
}

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

export { fn_ldstime, fn_hayID, fn_retIndex,  }