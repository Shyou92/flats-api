import { connect } from 'react-redux';
import Flats from '../Flats/Flats';

function FlatsList({ flats }) {
  return (
    <section className='flatsList'>
      {flats.length === 0
        ? ''
        : flats.map((flat) => {
            return <Flats key={flat.id} flat={flat} />;
          })}
    </section>
  );
}

const mapStateToProps = (state) => {
  const flats = state.flatReducer.flatsList;
  return {
    flats,
  };
};

export default connect(mapStateToProps, null)(FlatsList);
