import { useState } from 'react';
import { connect } from 'react-redux';
import Flat from '../../images/Flat.png'

function Flats({ flat }) {
  const [isLike, setIsLike] = useState(false)

  const handleLikeFlat = () => {
    setIsLike(true);
  }

  return (
    <section className='flatCard'>
      <h2 className='flatCard__header'>{flat.attributes.title}</h2>
      <img className='flatCard__image' src={Flat} alt='flat'/>
      <p className='flatCard__info'>
        Квартира с {flat.attributes.rooms} комнатами</p>
        <p className='flatCard__info'>
        Адрес: город {flat.attributes.address.city},
        улица {flat.attributes.address.street},
        дом {flat.attributes.address.house}, квартира {flat.attributes.address.room}.
      </p>
      <p className='flatCard__info'>
        Площадь квартиры {flat.attributes.area} {flat.attributes.unit}
      </p>
      <p className='flatCard__info'>
        Ваш агент: {flat.relationships.attributes.first_name}{' '} 
        {flat.relationships.attributes.middle_name }{' '}
        {flat.relationships.attributes.last_name}
      </p>
      <button className={`flatCard__like ${isLike ? 'flatCard__like_active' : ''}`} onClick={handleLikeFlat}></button>
    </section>
  );
}

const mapStateToProps = (state) => {
  const flat = state.flatReducer.flatsList.map((item) => {
    return item;
  });

  return {
    flats: flat,
  };
};

export default connect(mapStateToProps, null)(Flats);
