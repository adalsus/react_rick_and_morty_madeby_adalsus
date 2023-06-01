import imgNames from '../../.././img/img_name.js'
import { fn_ldstime, random0_9 } from '../.././fns/fnsApp.js'


const valCSS = {
  padSup: '20vw',
  urlImg: `url(${imgNames[ fn_ldstime()+random0_9() ]})`,
  bgSize: "100%",
}

const URL_BASE = /* 'https://rickandmortyapi.com/api' */ 
                    'http://localhost:3001/rickandmorty';

export { valCSS, URL_BASE }