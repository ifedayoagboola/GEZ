import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ picturesPerPage, totalPictures, paginate }) => {
	const pageNumbers = [];

	for (let x = 1; x <= Math.ceil(totalPictures / picturesPerPage); x++) {
		pageNumbers.push(x);
	}

	return (
		<Fragment>
			<div className='bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6'>
				<div className='text-gray-300 flex items-center space-x-2'>
					<div className='space-x-6'>
						{pageNumbers.map((num) => {
							return (
								<button
									key={num}
									className='hover:border-b-2 border-gray-700 px-2'
									onClick={() => paginate(num)}
								>
									{num}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Pagination;
