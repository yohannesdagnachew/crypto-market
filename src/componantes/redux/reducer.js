import ActionType from './actionType';

export default function CoinsReducer(state = [], { type, payload }) {
  switch (type) {
    case ActionType.DETAILS:
    {
      const result = [];
      const newArray = state.find((item) => item.id === payload);
      result.push(newArray);
      return result;
    }
    case ActionType.FILTERBYRANK:
    {
      const newArray = state.filter((item) => item.rank <= payload);
      return newArray;
    }
    case ActionType.FETCHDATA:
      return payload;
    default:
      return state;
  }
}
