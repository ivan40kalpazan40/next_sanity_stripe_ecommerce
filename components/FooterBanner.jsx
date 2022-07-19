import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({
  footerBanner: {
    largeText1,
    largeText2,
    saleTime,
    discount,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          {discount}
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={urlFor(`/product/${product}`)}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img className='footer-banner-image' src={urlFor(image)} alt='' />
      </div>
    </div>
  );
};

export default FooterBanner;
