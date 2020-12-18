import Observer from "../model/observer.js";
import {SortType} from "../const.js";

export default class Filter extends Observer {
  constructor() {
    super();
    this._activeFilter = SortType.ALL;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}
