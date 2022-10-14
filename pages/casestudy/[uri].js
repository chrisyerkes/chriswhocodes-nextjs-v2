import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TemplateHeader from '../../components/TemplateHeader';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';
import { getHomepageData } from '../../lib/homepage-data';
import { getThemeSettings } from '../../lib/theme-settings';
import { getCaseStudy } from '../../lib/individual-case-study';
import { getPrimaryMenu } from '../../lib/menus';

export default function SlugPage({
	themeSettings,
	homepageData,
	caseStudy,
	primaryMenu,
}) {
	const images = caseStudy?.imageGallery;
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
	function GalleryExists(props) {
		const exists = props.exists;
		const allimages = props.images;
		const set = props.set;

		if (exists) {
			if (set === 'even') {
				return (
					<ul>
						{evens.map((image) => {
							return (
								<li key={image.id}>
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
					<ul>
						{odds.map((image) => {
							return (
								<li key={image.id}>
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
								<li key={image.id}>
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
			return <p>I do not exist</p>;
		}
	}
	return (
		<>
			<Head>
				<title>Headless WP Next Starter</title>
			</Head>
			<TemplateHeader
				className='position-absolute w-100 top-0 start-0'
				currMenu={primaryMenu}
			/>
			<section className='content-section case-study-content-section case-study-header hero'>
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
			<section className='content-section case-study-content-section case-study-featured-image'>
				<div className='container'>
					<div className='row content-section'>
						<div className='col project-featured-image'>
							<img
								srcSet={caseStudy?.mainImage?.srcSet}
								src={caseStudy?.mainImage?.sourceUrl}
								className='img-fluid'
								alt={caseStudy?.mainImage?.altText}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='content-section case-study-content-section project-goals'>
				<div className='container'>
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
						<div className='col-6'>
							<GalleryExists
								exists={galleryCheck}
								images={images}
								set='odd'
							/>
						</div>
					</div>
					<div className='row content-section'>
						<article
							className='col-10 project-development-process-text'
							dangerouslySetInnerHTML={{
								__html: caseStudy?.developmentProcess,
							}}
						></article>
					</div>
					<div className='row content-section'>
						<div className='col project-goals-featured-image'>
							<img
								srcSet={caseStudy?.finalImage?.srcSet}
								src={caseStudy?.finalImage?.sourceUrl}
								className='img-fluid'
								alt={caseStudy?.finalImage?.altText}
							/>
						</div>
					</div>
					<div className='row content-section'>
						<article
							className='col-10 project-results-text'
							dangerouslySetInnerHTML={{
								__html: caseStudy?.results,
							}}
						></article>
					</div>
					<div className='row content-section other-projects'>
						<h2>Other Projects</h2>
						{related?.map((project) => {
							return (
								<div
									key={project.node.slug}
									className='col-6 related-project'
								>
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
							);
						})}
					</div>
				</div>
			</section>
			<ContactInfo homeData={homepageData} social={themeSettings} />
			<Footer social={themeSettings} />
		</>
	);
}

export async function getStaticProps({ params }) {
	const themeSettings = await getThemeSettings();
	const homepageData = await getHomepageData();
	const caseStudy = await getCaseStudy(params);
	const primaryMenu = await getPrimaryMenu();

	return {
		props: {
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
