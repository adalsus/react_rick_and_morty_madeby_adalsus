const fn_ldstime = () => {
    let today = new Date()
    let lds = ((today.getSeconds()+'').slice(-1))-0;
    return lds;
}

export default fn_ldstime