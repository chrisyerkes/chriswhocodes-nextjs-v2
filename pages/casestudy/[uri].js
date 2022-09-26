import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TemplateHeader from '../../components/TemplateHeader';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';
import { getCaseStudy } from '../../lib/individual-case-study';

export default function SlugPage({ caseStudy }) {
	const images = caseStudy?.imageGallery;

	if (images?.length > 0) {
		var galleryCheck = true;
	} else {
		var galleryCheck = false;
	}
	function GalleryExists(props) {
		const exists = props.exists;
		const allimages = props.images;
		const set = props.set;

		// function evenImagesArr(images) {
		let evens = [];
		allimages.forEach((el, i) => {
			if (i % 2 === 1) {
				// console.log(el[i]);
				evens.push(el[i]);
			}
		});
		// return evens;
		// if (parseInt(el[i]) % 2 === 0) {
		// 	evens.push(el);
		// }
		// console.log(el);
		// return evens;
		// }
		// console.log(evenImages(images));

		// const evenImages = images.map(evenImagesArr);
		if (exists) {
			if (set === 'even') {
				return (
					<ul>
						{evens.map((image) => {
							return <li key={image.id}>{image.sourceUrl}</li>;
						})}
					</ul>
				);
			} else {
				return (
					<ul>
						{images.map((image) => {
							return <li key={image.id}>{image.sourceUrl}</li>;
						})}
					</ul>
				);
			}
		} else {
			return <p>I do not exist</p>;
		}
	}
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>
			<TemplateHeader className='position-absolute w-100 top-0 start-0' />
			<section className='content-section case-study-header hero'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h1 className='case-study-title'>
								{caseStudy?.caseStudyTitle}
							</h1>
							<article
								className='col-10'
								dangerouslySetInnerHTML={{
									__html: caseStudy?.introduction,
								}}
							></article>
						</div>
					</div>
					<div className='row'>
						<div className='col-4'>
							<h4>Industry</h4>
							<ul className='industry-list'>
								{caseStudy?.industry.map((el) => {
									return <li key={el}>{el}</li>;
								})}
							</ul>
						</div>
						<div className='col-4'>
							<h4>Tech Stack</h4>
							<ul className='checkstack-list'>
								{caseStudy?.stack.map((tech) => {
									return <li key={tech}>{tech}</li>;
								})}
							</ul>
						</div>
						<div className='col-4'>
							<h4>Project Link</h4>
							<a
								href={caseStudy?.projectLink}
								className='btn btn-link has-arrow-right has-gradient-1'
							>
								View Project{' '}
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className='content-section project-goals'>
				<div className='container'>
					<div className='row content-section'>
						<div className='col project-goals-featured-image'>
							<img
								srcSet={caseStudy?.mainImage?.srcSet}
								src={caseStudy?.mainImage?.sourceUrl}
								className='img-fluid'
								alt={caseStudy?.mainImage?.altText}
							/>
						</div>
					</div>
					<div className='row content-section'>
						<article
							className='col-10 project-goals-text'
							dangerouslySetInnerHTML={{
								__html: caseStudy?.projectGoals,
							}}
						></article>
					</div>
					<div className='row content-section'>
						<article
							className='col-10 project-technology-text'
							dangerouslySetInnerHTML={{
								__html: caseStudy?.projectTechnology,
							}}
						></article>
					</div>
					<div className='row content-section'>
						<div className='col-6'>
							<GalleryExists
								exists={galleryCheck}
								images={images}
								set='even'
							/>
						</div>
						<div className='col-6'></div>
					</div>
				</div>
			</section>
			<ContactInfo />
			<Footer />
		</>
	);
}

export async function getStaticProps({ params }) {
	const caseStudy = await getCaseStudy(params);

	return {
		props: {
			caseStudy,
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
