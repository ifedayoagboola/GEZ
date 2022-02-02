import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import youtube from '../img/youtube.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import gmail from '../img/gmail.png';
import twitter from '../img/twitter.png';
import { newData } from '../newsData';
import StickyHeader from '../components/StickyHeader';
import Pagination from '../components/utils/Pagination';

const Media = () => {
	const [navbar, setNavbar] = useState(false);
	const [images] = useState(newData);
	const [initialPage, setInitialPage] = useState(1);
	const [picturesPerPage] = useState(9);

	const indexOfLastPost = initialPage * picturesPerPage;
	const indexOfFirstPost = indexOfLastPost - picturesPerPage;
	const currentPost = images.slice(indexOfFirstPost, indexOfLastPost);


  const paginateAction = (pageNum) => {
    setInitialPage(pageNum)
  }



	const navHandler = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
  window.addEventListener( 'scroll', navHandler );
  
  

	return (
		<div className=''>
			<section className=''>
				<div className='fixed w-full z-40'>
					{navbar ? <StickyHeader /> : <Header />}
				</div>
				<div
					className='w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left'
					style={{
						backgroundImage: 'url(/assets/newsImages/news.jpeg)',
					}}
				>
					<div className='text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12'>
						NEWS and EVENTS <span className='text-green-600'>/</span> <br />
						<p className='text-base text-white pt-5 font-semibold'>
							THE GREEN ECONOMIC ZONE AT A GLANCE
						</p>
					</div>
				</div>
			</section>
			<div className='bg-gray-200 font-normal text-gray-700 text-base lg:text-xl '>
				<div className='flex items-center justify-end gap-4 py-5 pr-6'>
					<div className='w-10 h-10'>
						<img className='w-full' src={facebook} alt='' />
					</div>
					<div className='w-10 h-10'>
						<img className='w-full' src={gmail} alt='' />
					</div>
					<div className='w-10 h-10'>
						<img className='w-full' src={youtube} alt='' />
					</div>
					<div className='w-10 h-10'>
						<img className='w-full' src={instagram} alt='' />
					</div>
					<div className='w-10 h-10'>
						<img className='w-full' src={twitter} alt='' />
					</div>
				</div>
			</div>
			<section>
				{/* Pagination components */}
				<div className='flex items-center justify-center py-10'>
					<div className='grid grid-cols-3 gap-4'>
						{currentPost.map((el) => {
							const { id, date, content, image } = el;

							return (
								<button key={id} className='shadow-md rounded-lg'>
									<div className='relative'>
										<img src={image} alt='' width={400} height={400} />
										<div className='absolute inset-x-0 bottom-0'>
                      <div className='pr-40 py-6 bg-slate-300'>
                      <span className='pr-24'>
												<strong className='text-green-400'>{date}</strong>
											</span><br />
											<span>
												<strong>{content}</strong>
											</span>
                      </div>
										</div>
									</div>
								</button>
							);
						})}
					</div>
				</div>
        <Pagination picturesPerPage={picturesPerPage} totalPictures={images.length} paginate={paginateAction} />
				{/* Pagination components */}
			</section>
			<section className=''>
				<div
					style={{ background: '#373A36' }}
					className='w-full text-center mt-10 '
				>
					<div className='py-16 flex justify-center items-center flex-col container mx-auto px-4'>
						<div className='w-20'>
							<img className='w-full' src='../assets/doc3.png' alt='' />
						</div>
						<p className='text-3xl font-semibold py-8 text-white'>
							DOWNLOAD OUR BROCHURE
							<span className='text-green-600 font-bold'>/</span>
						</p>
						<p className='cursor-pointer text-green-600 text-base font-semibold'>
							Click here...
						</p>
					</div>
				</div>
			</section>

			<section className=''>
				<Footer />
			</section>
		</div>
	);
};

export default Media;
