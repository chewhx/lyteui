import React from 'react';
import { DefaultSizes } from '../../theme/types/DefaultSizes';
import { StyledImage } from './Image.styled';
import PropTypes from 'prop-types'

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /**Set image to parent container */
	fluid?: boolean;
  /**Adjusts the border-radius */
	radius?: DefaultSizes;
};

const propTypes = {
  fluid: PropTypes.bool,
  radius: PropTypes.oneOf<DefaultSizes>([])
};

const defaultProps = {};

const Image: React.FC<ImageProps> = React.forwardRef<
	HTMLImageElement,
	ImageProps
>((props, ref) => {
	return <StyledImage {...props} ref={ref} />;
});

Image.displayName = 'Image';
Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
export default Image;
