import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import Flickity from 'react-flickity-component';
import {
	faBusinessTime,
	faCode,
	faBolt,
	faWandMagicSparkles,
	faWrench,
	faPlug,
	faPalette,
	faFileCode,
} from '@fortawesome/free-solid-svg-icons';

const flickityOptions = {
	cellSelector: '.single-service',
	cellAlign: 'left',
	contain: true,
	pageDots: false,
	prevNextButtons: false,
	on: {
		ready: function () {
			const serviceElements =
				document.querySelectorAll('.single-service');
			let maxHeight = 0;
			if (serviceElements.length > 0) {
				serviceElements.forEach(function (element) {
					let elHeight = element.offsetHeight;
					if (elHeight > maxHeight) {
						maxHeight = elHeight;
					}
				});
				serviceElements.forEach(function (element) {
					element.style.height = maxHeight + 'px';
				});
			}
		},
	},
};

const ServiceSlider = ({
	children,
	serviceData,
	homeData,
	className = 'content-section services',
}) => {
	return (
		<>
			{serviceData && (
				<section className={className} id='services'>
					<div className='container'>
						{homeData.servicesTitle && (
							<div className='row'>
								<div className='col text-center'>
									<h2 className='section-title'>
										{homeData.servicesTitle}
									</h2>
								</div>
							</div>
						)}
						<div className='row'>
							<div className='col'>
								<Flickity
									className={'services-slider'} // default ''
									elementType={'div'} // default 'div'
									options={flickityOptions} // takes flickity options {}
									disableImagesLoaded={false} // default false
									reloadOnUpdate // default false
									static // default false
								>
									{serviceData.map((service) => {
										const iconArr = [
											faWordpressSimple,
											faBusinessTime,
											faCode,
											faBolt,
											faWandMagicSparkles,
											faWrench,
											faPlug,
											faPalette,
											faFileCode,
										];
										let serviceIcon;
										iconArr.forEach((icon) => {
											if (
												icon.iconName ===
												service.serviceIcon
											) {
												serviceIcon = icon;
											}
										});
										return (
											<div
												key={service?.serviceId}
												className='single-service text-center'
											>
												<div className='card'>
													{service?.serviceIcon && (
														<div className='service-icon d-flex align-items-center justify-content-center mx-auto'>
															<FontAwesomeIcon
																icon={
																	serviceIcon
																}
															/>
														</div>
													)}
													{service?.serviceTitle && (
														<h4>
															{
																service?.serviceTitle
															}
														</h4>
													)}
													{service?.serviceDescription && (
														<div
															className='service-description'
															dangerouslySetInnerHTML={{
																__html: service?.serviceDescription,
															}}
														/>
													)}
												</div>
											</div>
										);
									})}
								</Flickity>
							</div>
						</div>
					</div>
					{children}
				</section>
			)}
		</>
	);
};

export default ServiceSlider;
