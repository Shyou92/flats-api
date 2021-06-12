import { connect } from 'react-redux';
import Flats from '../Flats/Flats';

function FlatsList({ flats }) {
  console.log(flats.length);
  return (
    <div className='flatsList'>
      {flats.length === 0 ? (
        <p>Поищем квартиру Вашей мечты?</p>
      ) : (
        flats.map((flat) => {
          return <Flats key={flat.id} flat={flat} />;
        })
      )}
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

// const mapDispatchToProps = { getFlats, flatReducer };

export default connect(mapStateToProps, null)(FlatsList);
