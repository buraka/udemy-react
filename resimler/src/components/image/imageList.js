import React from 'react';
import './imageList.css';
import Image from './image';

const ImageList = ({ images }) => {

  const preparedImagelist = images.map(image => {
    return (
      <Image key={image.id} image={image} />
    )
  });

  return (
    <div className='image-list-container'>
      {preparedImagelist}
    </div>
  )
}

export default ImageList;
