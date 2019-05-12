import { observable } from "mobx";

class mainStore {
  
  @observable title = "";
  @observable finished = false;
  @observable user = null;
}
export default new mainStore();