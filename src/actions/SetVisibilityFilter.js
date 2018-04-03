import { SET_VISIBILITY_FILTERS } from '../constants/enumActions';

function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTERS,
    payload: filter,
  }
}

export default setVisibilityFilter;