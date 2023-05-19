import {GET_CARS} from '../../actions/carsAction'

const initialState = {
  getCarsResult: false,
  getCarsLoading: false,
  getCarsError: false,
}

const cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        getCarsResult: action.payload.data,
        getCarsLoading: action.payload.loading,
        getCarsError: action.payload.error,
      }
    default:
      return state
  }
}

export default cars