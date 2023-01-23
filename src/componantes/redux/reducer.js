import ActionType from './actionType';

const allCoin = [];

export default function CoinsReducer(state = [], { type, payload }) {
  switch (type) {
    case ActionType.DETAILS:
    {
      const result = [];
      const newArray = allCoin.slice(0, 100).find((item) => item.id === payload);
      result.push(newArray);
      return result;
    }
    case ActionType.FILTERBYRANK:
    {
      const newArray = allCoin.slice(0, 100).filter((item) => item.rank <= payload);
      return newArray;
    }
    case ActionType.SEARCH:
    {
      const newArray = allCoin.splice(0, 100).filter((item) => item.name.toLowerCase().includes(payload.toLowerCase()));
      return newArray;
    }
    case ActionType.FETCHDATA:
    {
      allCoin.push(...payload);
      return allCoin.slice(0, 100);
    }
    default:
      return state;
  }
}
