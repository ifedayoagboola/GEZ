import React, { useState } from 'react';
import { Transition } from '@tailwindui/react';

const NewsCard = ({ article }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=' sm:w-full md:w-1/2 lg:w-1/4'>
			<div className='h-full overflow-hidden'>
				<div style={{ background: '#DDDDDD' }}>
					<div className='relative'>
						<Transition
							show={isOpen}
							enter='transition-opacity duration-75'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity duration-150'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='absolute inset-0'>
								<div className='h-full w-full'>
									<div className='bg-black'>
                    <div className='flex justify-end text-white p-4 animate-bounce cursor-pointer' onClick={() => setIsOpen(!isOpen)}>X</div>
                    <div className='flex justify-center items-center'>
                      <div className='p-4'>
                        <p className='text-sm font-semibold mb-3 text-white'>{article.title}</p>
                        <p className='text-base font-medium text-green-300 mb-1'>{article.date}</p>
                        <p className=' leading-relaxed mb-3 text-white'>{article.content}</p>
                      </div>
                      {/* Quick fix */}
                      {/* <div className='w-'></div> */}
                    </div>
									</div>
								</div>
							</div>
						</Transition>
					</div>
					<div className='p-3 hover:bg-green-700 hover:text-white transition duration-300 ease-in'>
						<div>
							<img
								className='lg:h-72 md:h-48 w-full object-cover object-center'
								src={article.img}
								alt=''
							/>
						</div>
						<div className='py-6 '>
							<p className='text-base font-medium text-green-300 mb-1'>
								{article.date}
							</p>
							<p className='text-sm font-semibold mb-3'>{`${article.title.slice(
								0,
								36
							)}...`}</p>
							<p className=' leading-relaxed mb-3'>{`${article.content.slice(
								0,
								100
							)}...`}</p>
							<div className='flex items-center flex-wrap hover:animate-bounce cursor-pointer'>
								<span
									className='text-green-300 inline-flex items-center md:mb-2 lg:mb-0'
									onClick={() => setIsOpen(!isOpen)}
								>
									Read More
									<svg
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M5 12h14'></path>
										<path d='M12 5l7 7-7 7'></path>
									</svg>
								</span>
								<span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
									<svg
										className='w-4 h-4 mr-1'
										stroke='currentColor'
										strokeWidth='2'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
										<circle cx='12' cy='12' r='3'></circle>
									</svg>
									1.2K
								</span>
								<span className='text-gray-400 inline-flex items-center leading-none text-sm'>
									<svg
										className='w-4 h-4 mr-1'
										stroke='currentColor'
										strokeWidth='2'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
									</svg>
									6
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
