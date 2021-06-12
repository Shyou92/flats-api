import { connect } from 'react-redux';
import Api from '../../utils/api';
import { useState, useEffect } from 'react';
import flatReducer from '../../redux/reducers/flatReducer';
import getFlats from '../../redux/actionCreators';
import store from '../../redux/store';
import Preloader from '../Preloader/Preloader';
import FlatsList from '../FlatsList/FlatsList';
import Flats from '../Flats/Flats';

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
  console.log(isLoaded);
  return (
    <div className='App'>
      <h1 className='header'>Добро пожаловать в квартиру всей вашей жизни</h1>
      <button onClick={obtainData}>Click</button>
      {flats.length === 0 && isLoaded ? <Preloader /> : <FlatsList />}
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
