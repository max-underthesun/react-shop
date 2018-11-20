import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => (
  <div>
    <img src={ src } height={ height } width={ width } alt={ alt }></img>
  </div>
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  src: '/static/images/no_image.png',
  width: '250px',
  height: '200px',
  alt: 'one more nice car'
};

export default Image;
