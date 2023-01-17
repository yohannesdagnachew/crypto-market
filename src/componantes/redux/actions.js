import ActionType from './actionType';
import getCounty from './api';

export function fetchData(coins) {
  return {
    type: ActionType.FETCHDATA,
    payload: coins,
  };
}

export function filterByRank(coins) {
  return {
    type: ActionType.FILTERBYRANK,
    payload: coins,
  };
}

export function detail(coins) {
  return {
    type: ActionType.DETAILS,
    payload: coins,
  };
}

export const setData = () => async (dispatch) => {
  const url = 'https://api.coinstats.app/public/v1/coins';
  const res = await getCounty(url);
  const rocketData = res.data.coins;
  dispatch(fetchData(rocketData));
};
