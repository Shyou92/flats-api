import { connect } from 'react-redux';
import Api from '../../utils/api';
import { useState, useEffect } from 'react';
import flatReducer from '../../redux/reducers/flatReducer';
import getFlats from '../../redux/actionCreators';
import store from '../../redux/store';
import Preloader from '../Preloader/Preloader';
import FlatsList from '../FlatsList/FlatsList';

function App({ flats, getFlats }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const api = new Api();
    let promiseResult = setTimeout(() => api.getData(), 4000);
    return promiseResult;
  }, []);

  function obtainData() {
    setIsLoaded(true);
    const api = new Api();
    api.getData().then((res) => {
      store.dispatch(() => getFlats(res));
    });
  }

  return (
    <div className='App'>
      <div className='page'>
        <div className='container'>
          <h1 className='header'>Поищем квартиру Вашей мечты?</h1>
          {flats.length === 0 && !isLoaded ? (
            <button className='search' onClick={obtainData}>
              Поиск
            </button>
          ) : (
            ''
          )}
          {flats.length === 0 && isLoaded ? <Preloader /> : <FlatsList />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const flats = state.flatReducer.flatsList;
  return {
    flats,
  };
};

const mapDispatchToProps = { getFlats, flatReducer };

export default connect(mapStateToProps, mapDispatchToProps)(App);
