import GET_FLATS from '../../constants';

const initialState = {
  flatsList: [],
};

export default function flatReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLATS:
      return {
        ...state,
        flatsList: action.payload,
      };
    default:
      return state;
  }
}
