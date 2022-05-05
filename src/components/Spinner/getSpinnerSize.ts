import { SpinnerSizes } from './Spinner.enum';
import { SpinnerSizes as SpinnerSizesType } from './Spinner.types';

export default (size: SpinnerSizesType) =>
	size ? SpinnerSizes[size] : SpinnerSizes.md;
