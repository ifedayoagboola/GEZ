import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';
import zone1 from '../img/zone1.jpg';
import zone2 from '../img/zone2.jpg';
import zone3 from '../img/zone-3.jpg';
import zone4 from '../img/zone-4.jpg';
import { Link } from 'react-router-dom';

const Pricing = () => {
	const [navbar, setNavbar] = useState(false);
	const navHandler = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', navHandler);
	return (
		<div className=''>
			<section className=''>
				<div className='fixed w-full z-40'>
					{navbar ? <StickyHeader /> : <Header />}
				</div>
				<div
					className='w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left'
					style={{
						backgroundImage: 'url(/assets/pricing.jpg)',
					}}
				>
					<div className='text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12'>
						PRICING <span className='text-green-600'>/</span> <br />
						<p className='text-base text-black pt-5 font-semibold'>
						THE GREEN ECONOMIC ZONE AT A GLANCE
						</p>
					</div>
				</div>
			</section>
			<div className='bg-gray-200 font-normal text-gray-700 text-base lg:text-base '>
				<p className='container mx-auto pl-32 py-6'>
					Designed to provide a “plug and play” facility for Micro, Small and
					Medium Enterprises (MSMEs) to enable them to operate competitively.
				</p>
			</div>
			<section className='flex justify-center items-center'>
				<div className='py-5'>
					<div className='flex'>
						<Link to='#'>
							<div className='relative border-r-4 border-b-4 border-gray-200'>
								 <img src={zone1} alt='' height={500} width={500} /> 
								<div className='absolute inset-0 hover:bg-lime-500 text-white'>
									<h1 className='text-5xl text-center py-8'>
										Zone-A
									</h1>
									<div className='flex justify-evenly'>
										<span className='text-xl'>
											PRICE: 35 USD per sqm
										</span>
									</div>
								</div>
							</div>
						</Link>
						<Link to='#'>
							<div className='relative border-l-4 border-b-4 border-gray-200'>
								 <img src={zone4} alt='' height={500} width={500} /> 
								<div className='absolute inset-0 hover:bg-lime-500 text-white'>
									<h1 className='text-5xl text-center py-8'>
										ZONE-B
									</h1>
									<div className='flex justify-evenly'>
										<span className='text-xl'>
											Price: 31 USD per sqm
										</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className='flex'>
						<Link to='#'>
							<div className='relative border-r-4 border-t-4 border-gray-200'>
								 <img src={zone3} alt='' height={500} width={500} /> 
								<div className='absolute inset-0 hover:bg-lime-500 text-white'>
									<h1 className='text-5xl text-center py-8'>
										ZONE-C
									</h1>
									<div className='flex justify-evenly'>
										<span className='text-xl'>
											Price: 26 USD per sqm
										</span>
									</div>
								</div>
							</div>
						</Link>
						<Link to='#'>
							<div className='relative border-l-4 border-t-4 border-gray-200'>
								 <img src={zone2} alt='' height={500} width={500} /> 
								<div className='absolute inset-0 hover:bg-lime-500 text-white'>
									<h1 className='text-5xl text-center py-8'>
										ZONE-D
									</h1>
									<div className='flex justify-evenly'>
										<span className='text-xl'>
											Price: 21 USD per sqm
										</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section>
				<div className='text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start '>
					<div
						className='w-full lg:w-1/2 h-screen'
						style={{ background: '#EBEBEB', color: '#000' }}
					>
						<div className='container mx-auto px-8 lg:p-20 py-8 my-14'>
							<p className='text-2xl font-semibold py-8 text-gray-700'>
								PAYMENT PLAN
								<span className='text-green-600 font-bold'>/</span>
							</p>
							<p className='text-xl font-semibold text-gray-700'>
								These are the payment options available at the Green Economic
								Zone, Kaduna.
							</p>
							<br />
							
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								1. One-off full payment.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								2. Bi-annual payment of 50% of the total price.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								3. 4-year installmental payments of 25% of the total price.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								4. C of O is issued and deposited with the bank and will be
								handed over to the anchor tenant on completion of payment.
							</p>
							{/* <p className='cursor-pointer text-green-600 text-base font-semibold py-8'>
								LEARN MORE...
							</p> */}
						</div>
					</div>
					<div
						className='w-full lg:w-1/2 h-screen bg-no-repeat bg-cover'
						style={{
							backgroundImage: 'url(/assets/bckgrnd-1.jpg)',
						}}
					></div>
				</div>
      </section>
      
      <section>
				<div className='text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start '>
					<div
						className='w-full lg:w-1/2 h-screen bg-no-repeat bg-cover'
						style={{
							backgroundImage: 'url(/assets/bckgrnd-2.jpg)',
						}}
          ></div>
          <div
						className='w-full lg:w-1/2 h-screen'
						style={{ background: '#EBEBEB', color: '#000' }}
					>
						<div className='container mx-auto px-8 lg:p-20 py-8 my-8'>
							<p className='text-2xl font-semibold py-8 text-gray-700'>
              AMENITIES

								<span className='text-green-600 font-bold'>/</span>
							</p>
							<p className='text-xl font-semibold text-gray-700'>
              The industrial park is served with top-notch infrastructures and amenities:
							</p>
							<br />
							
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								1. Fibre Optics.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								2. Solar street lights.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								3. Paved walkways and breathtaking landscaped green areas.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								4. 3000metric tons of water supply from Kangimi dam.
              </p>
              <p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								5. Firefighters and Fire station.
              </p>
              <p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								6. Ultra-modern specialist hospital.
              </p>
              <p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								7. Central Research and Laboratory.
              </p>
              <p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								8. Warehouses.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								9. 24hrs CCTV surveillance.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								10. Skills development centers and administration blocks.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								11. Environmental Cleaning and Annual Fumigation.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								12. Domestic & Industrial Waste Including Evacuation.
							</p>
							<p
								className='font-light text-gray-700'
								style={{ borderRight: '2px solid green' }}
							>
								13. Water Treatment System Sewage System.
							</p>
							{/* <p className='cursor-pointer text-green-600 text-base font-semibold py-8'>
								LEARN MORE...
							</p> */}
						</div>
					</div>
				</div>
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

export default Pricing;
