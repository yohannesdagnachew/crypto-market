import ActionType from './actionType';

export default function CountryReducer(state = [{ id: 1, country: 'Ethiopia' }], { type, payload }) {
  switch (type) {
    case ActionType.CITYS:
      return state;
    case ActionType.BACK:
      return {
        ...state, payload,
      };
    case ActionType.FETCHDATA:
      return state;
    default:
      return state;
  }
}
