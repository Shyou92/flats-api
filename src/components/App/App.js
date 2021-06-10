import Api from '../../utils/api';

function App() {
  const api = new Api();
  const handleClick = () => {
    return api.getData();
  };

  return (
    <div className='App'>
      <button className='obtain-api' onClick={handleClick}>
        Obtain data
      </button>
    </div>
  );
}

export default App;
