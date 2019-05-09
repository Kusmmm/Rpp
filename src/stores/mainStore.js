import { observable } from "mobx";

class mainStore {
  
  @observable title = "";
  @observable finished = false;
}
export default new mainStore();