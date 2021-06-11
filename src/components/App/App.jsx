import { connect } from 'react-redux';
import Api from '../../utils/api';
import { useEffect } from 'react';
import flatReducer from '../../redux/reducers/flatReducer';
import getFlats from '../../redux/actionCreators';
import store from '../../redux/store';

function App({ getFlats }) {
  useEffect(() => {
    const api = new Api();
    let promiseResult = setTimeout(() => api.getData(), 4000);
    return promiseResult;
  }, []);

  function obtainData() {
    const api = new Api();
    return api.getData().then((res) => {
      store.dispatch(() => getFlats(res));
    });
  }

  return (
    <div className='App'>
      <button onClick={obtainData}>Click</button>
      {/* <h1>{flats}</h1> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  const flats = state.flatReducer.flatsList;
  console.log(flats);
  return {
    flats,
  };
};

const mapDispatchToProps = { getFlats, flatReducer };

export default connect(mapStateToProps, mapDispatchToProps)(App);
