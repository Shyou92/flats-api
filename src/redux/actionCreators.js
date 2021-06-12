import GET_FLATS from '../constants';

export default function getFlats(flatsList) {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: GET_FLATS,
        payload: flatsList,
      });
    }, 2000);
  };
}
