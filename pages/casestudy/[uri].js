import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Flickity from 'react-flickity-component';
import TemplateHeader from '../../components/TemplateHeader';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';
import { getGeneralSettingsData } from '../../lib/general-settings';
import { getHomepageData } from '../../lib/homepage-data';
import { getThemeSettings } from '../../lib/theme-settings';
import { getCaseStudy } from '../../lib/individual-case-study';
import { getPrimaryMenu } from '../../lib/menus';

const flickityOptions = {
	cellSelector: '.single-mobile-screen',
	cellAlign: 'left',
	contain: true,
	pageDots: false,
	prevNextButtons: false,
};

export default function SlugPage({
	generalSettings,
	pageSlug,
	themeSettings,
	homepageData,
	caseStudy,
	primaryMenu,
}) {
	const images = caseStudy?.miniGallery;
	const mobileImages = caseStudy?.mobileImageCarousel;
	const related = caseStudy?.otherProjects?.edges;

	let evens = [];
	let odds = [];
	if (images?.length > 0) {
		images?.map((image, i) => {
			if (i % 2 === 0) {
				evens.push(image);
			} else {
				odds.push(image);
			}
		});
	}

	if (images?.length > 0) {
		var galleryCheck = true;
	} else {
		var galleryCheck = false;
	}
	function onClickHandler(e) {
		let cleanup = document.querySelector('.image-popup');
		let overlayCheck = document.querySelector('.image-popup-overlay');
		if (cleanup) {
			cleanup.remove();
		}
		// const itemID = e.currentTarget.dataset.image;
		const currItem = e.currentTarget;
		let topPos = window.scrollY + 100;
		const imagePopupWrap = document.createElement('div');
		const imagePopup = document.createElement('div');
		const imageCloseBtn = document.createElement('button');
		const clone = currItem.querySelector('img').cloneNode(true);
		imagePopup.classList.add('image-popup');
		imagePopupWrap.classList.add('image-popup-wrapper');
		imageCloseBtn.classList.add('close-button');
		imagePopupWrap.style.top = topPos + 'px';
		
		if (overlayCheck === null) {
			const overlay = document.createElement('div');
			overlay.classList.add('image-popup-overlay');
			document.querySelector('body').appendChild(overlay);
			setTimeout(function () {
				overlay.classList.add('opened');
			}, 100);
		} else {
			setTimeout(function () {
				overlayCheck.classList.add('opened');
			}, 100);
		}
		document.querySelector('body').appendChild(imagePopupWrap);
		document.querySelector('.image-popup-wrapper').appendChild(imagePopup);
		imagePopup.appendChild(clone);
		imagePopup.appendChild(imageCloseBtn);

		// Activating Transition
		setTimeout(function () {
			imagePopupWrap.classList.add('opened');
		}, 100);

		// Closing Popups
		imageCloseBtn.addEventListener('click', (e) => {
			let cleanup = document.querySelector('.image-popup-wrapper');
			let overlayCheck = document.querySelector('.image-popup-overlay');
			if (cleanup) {
				cleanup.remove();
				overlayCheck.classList.remove('opened');
			}
		});
	}
	function GalleryExists(props) {
		const exists = props.exists;
		const allimages = props.images;
		const set = props.set;

		if (exists) {
			if (set === 'even') {
				return (
					<ul className="case-study-mini-gallery-list evens">
						{evens.map((image) => {
							return (
								<li key={image.id} data-image={image.id} className='has-browser-chrome' onClick={onClickHandler}>
									<img
										src={image.sourceUrl}
										srcSet={image.srcSet}
										alt={image.altText}
										className='img-fluid'
									/>
								</li>
							);
						})}
					</ul>
				);
			} else if (set === 'odd') {
				return (
					<ul className="case-study-mini-gallery-list odds">
						{odds.map((image) => {
							return (
								<li key={image.id} data-image={image.id} className='has-browser-chrome' onClick={onClickHandler}>
									<img
										src={image.sourceUrl}
										srcSet={image.srcSet}
										alt={image.altText}
										className='img-fluid'
									/>
								</li>
							);
						})}
					</ul>
				);
			} else {
				return (
					<ul>
						{allimages.map((image) => {
							return (
								<li key={image.id} data-image={image.id} className='has-browser-chrome' onClick={onClickHandler}>
									<img
										src={image.sourceUrl}
										srcSet={image.srcSet}
										alt={image.altText}
										className='img-fluid'
									/>
								</li>
							);
						})}
					</ul>
				);
			}
		} else {
			return <p>No images</p>;
		}
	}
	function MobileScreens(props) {
		const screens = props.images;
		if (screens.length > 0) {
			return (
				<Flickity
					className={'mobile-screens-slider'}
					elementType={'div'}
					options={flickityOptions}
					disableImagesLoaded={false}
					reloadOnUpdate
					static
				>
					{screens.map((screen) => {
						return (
							<div key={screen.id} className="single-mobile-screen">
								<div className='card'>
									<img src={screen.sourceUrl} srcSet={screen.srcSet} alt={screen.altText} className="img-fluid" />
								</div>
							</div>
						);
					})}
				</Flickity>
			);
		}
	}
	return (
		<>
			<Head>
				<title>{generalSettings?.title} - {caseStudy?.caseStudyTitle}</title>
				<meta property='og:title' content={`${generalSettings?.title} - ${caseStudy?.caseStudyTitle}`} />
			</Head>
			<TemplateHeader
				className='position-absolute w-100 top-0 start-0'
				currMenu={primaryMenu}
				pageCheck={pageSlug}
			/>
			<section className='content-section case-study-content-section case-study-header hero'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1 className='case-study-title'>
								{caseStudy?.caseStudyTitle}
							</h1>
							{caseStudy?.introduction && (
								<article
									className='col-md-10'
									dangerouslySetInnerHTML={{
										__html: caseStudy?.introduction,
									}}
								></article>
							)}
						</div>
					</div>
					<div className='row'>
						{caseStudy?.industry && (
							<div className='col-sm-6 col-md-4'>
								<h4>Industry</h4>
								<ul className='industry-list'>
									{caseStudy?.industry.map((el) => {
										return <li key={el}>{el}</li>;
									})}
								</ul>
							</div>
						)}
						{caseStudy?.stack && (
							<div className='col-sm-6 col-md-4'>
								<h4>Tech Stack</h4>
								<ul className='checkstack-list'>
									{caseStudy?.stack.map((tech) => {
										return <li key={tech}>{tech}</li>;
									})}
								</ul>
							</div>
						)}
						{caseStudy?.projectLink && (
							<div className='col-md-4 mt-4 mt-md-0 mb-1 mb-md-0'>
								<h4>Project Link</h4>
								<a
									href={caseStudy?.projectLink}
									className='btn btn-link has-arrow-right has-gradient-1'
								>
									View Project{' '}
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</div>
						)}
					</div>
				</div>
			</section>
			{caseStudy?.mainImage && (
				<section className='content-section case-study-content-section case-study-featured-image'>
					<div className='container'>
						<div className='row content-section'>
							<div className='col project-featured-image'>
								<div className="has-browser-chrome main-image-desktop-wrapper">
									<img
										srcSet={caseStudy?.mainImage?.srcSet}
										src={caseStudy?.mainImage?.sourceUrl}
										className='img-fluid main-image-desktop'
										alt={caseStudy?.mainImage?.altText}
										/>
								</div>
								{caseStudy.mainMobileImage && (
									<div className="main-image-mobile-wrapper">
										<img
											srcSet={caseStudy?.mainMobileImage?.srcSet}
											src={caseStudy?.mainMObileImage?.sourceUrl}
											className='img-fluid main-image-mobile'
											alt={caseStudy?.mainMObileImage?.altText}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			)}
			{caseStudy?.projectGoals && (
				<section className='content-section case-study-content-section project-goals'>
					<div className='container'>
						<div className='row content-section'>
							<article
								className='col-md-10 project-goals-text'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.projectGoals,
								}}
							></article>
						</div>
					</div>
				</section>
			)}
			{images && (
				<section className='content-section case-study-content-section has-blue-bg project-mini-gallery'>
					<div className="container">
						<div className='row content-section'>
							<div className='col-lg-6'>
								<GalleryExists
									exists={galleryCheck}
									images={images}
									set='even'
								/>
							</div>
							<div className='col-lg-6'>
								<GalleryExists
									exists={galleryCheck}
									images={images}
									set='odd'
								/>
							</div>
						</div>
					</div>
				</section>
			)}
			{caseStudy?.projectTechnology && (
				<section className="content-section case-study-content-section project-technology">
					<div className="container">
						<div className='row content-section'>
							<article
								className='col-md-10 project-technology-text'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.projectTechnology,
								}}
							></article>
						</div>
					</div>
				</section>
			)}
			{caseStudy?.developmentProcess && (
				<section className="content-section case-study-content-section project-development-process">
					<div className='container'>
						<div className='row content-section'>
							<article
								className='col-md-10 project-development-process-text'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.developmentProcess,
								}}
							></article>
						</div>
					</div>
				</section>
			)}
			{mobileImages && (
				<section className='content-section case-study-content-section case-study-mobile-slider'>
					<div className="container">
						<div className='row'>
							<div className='col case-study-mobile-slider-wrapper'>
								<MobileScreens images={mobileImages} />
							</div>
						</div>
					</div>
				</section>
			)}
			{caseStudy?.finalImage && (
				<section className='content-section case-study-content-section has-blue-bg final-image'>
					<div className="container">
						<div className='row content-section'>
							<div className='col project-goals-featured-image'>
								<div className='has-browser-chrome featured-image-wrapper'>
									<img
										srcSet={caseStudy?.finalImage?.srcSet}
										src={caseStudy?.finalImage?.sourceUrl}
										className='img-fluid'
										alt={caseStudy?.finalImage?.altText}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
			<section className='content-section case-study-content-section project-results'>
				<div className='container'>
					{caseStudy?.results && (
						<div className='row content-section'>
							<article
								className='col-md-10 project-results-text'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.results,
								}}
							></article>
						</div>
					)}
					{related && (
						<div className='row content-section other-projects'>
							<h2>Other Projects</h2>
							{related?.map((project) => {
								return (
									<div
										key={project.node.slug}
										className='col-md-6 related-project'
									>
										<div className='card d-flex flex-column'>
											<div className='related-project-image'>
												<img
													src={
														project.node.featuredImage?.node
															.sourceUrl
													}
													srcSet={
														project.node.featuredImage?.node
															.srcSet
													}
													alt={
														project.node.featuredImage?.node
															.altText
													}
													className='img-fluid'
												/>
											</div>
											<div className='project-details-wrap'>
												<h3>{project.node.caseStudyTitle}</h3>
												<article
													className='project-mini-description'
													dangerouslySetInnerHTML={{
														__html: project.node
															.projectMiniDescription,
													}}
												></article>
												<p>
													<Link href={project.node.uri}>
														<a className='btn btn-link btn-link-sm stretched-link has-arrow-right'>
															View Project{' '}
															<FontAwesomeIcon
																icon={faArrowRight}
															/>
														</a>
													</Link>
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</section>
			<ContactInfo homeData={homepageData} social={themeSettings} />
			<Footer social={themeSettings} />
		</>
	);
}

export async function getStaticProps({ params }) {
	const generalSettings = await getGeneralSettingsData();
	const pageSlug = 'case-study';
	const themeSettings = await getThemeSettings();
	const homepageData = await getHomepageData();
	const caseStudy = await getCaseStudy(params);
	const primaryMenu = await getPrimaryMenu();

	return {
		props: {
			generalSettings,
			pageSlug,
			themeSettings,
			caseStudy,
			primaryMenu,
			homepageData,
		},
	};
}

export async function getStaticPaths() {
	const paths = [];
	return {
		paths,
		fallback: 'blocking',
	};
}
