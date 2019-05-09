import { observable, action, observe, decorate} from 'mobx';
import _ from 'lodash';
const SERVER_NAME = '';
class mainStore {

  tastks = observable([1,2,3]);
  token = "";

}

export default new mainStore();