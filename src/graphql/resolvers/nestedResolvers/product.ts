import { ProductModel } from '../../../models';

export default {
	id: _ => _.id,
	minPrice: _ =>
		new Promise((resolve, reject) => {
			ProductModel.aggregate([
				{
					$match: { id: _.id }
				},
				{
					$project: {
						smallMin: { $min: '$florists.size.small.price' },
						mediumMin: { $min: '$florists.size.medium.price' },
						bigMin: { $min: '$florists.size.big.price' }
					}
				},
				{
					$project: {
						minPrice: { $min: [ '$smallMin', '$mediumMin', 'bigMin' ] }
					}
				}
			]).then(products => {
				if (products[0]) {
					return resolve(products[0].minPrice);
				} else {
					return resolve(0);
				}
			});
		}),
	sizePrices: (_, { filter }) =>
		new Promise((resolve, reject) => {
			if (filter && filter.floristId !== 'NOT_FOUND') {
				ProductModel.findOne({ id: _.id, florists: { $elemMatch: { id: filter.floristId } } }).then(product => {
					const florists = (product as any).florists;
					const { size, priceIfOneSize } = florists[0];

					resolve({ priceIfOneSize, small: size.small.price, medium: size.medium.price, big: size.big.price });
				});
			} else {
				ProductModel.aggregate([
					{
						$match: { id: _.id }
					},
					{
						$project: {
							small: { $min: '$florists.size.small.price' },
							medium: { $min: '$florists.size.medium.price' },
							big: { $min: '$florists.size.big.price' }
						}
					}
				]).then(products => {
					if (products[0]) {
						return resolve(products[0]);
					} else {
						return resolve(0);
					}
				});
			}
		})
};
