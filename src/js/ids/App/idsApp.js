import imgNames from '../../../img/img_name.js'
import { fn_ldstime, random0_9 } from '../../fns/fnsApp'


const valCSS = {
  padSup: '20vw',
  urlImg: `url(${imgNames[ fn_ldstime()+random0_9() ]})`,
  bgSize: "100%",
};

export default valCSS;