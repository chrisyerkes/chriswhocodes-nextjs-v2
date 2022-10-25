// Implement Paging later
// https://codesandbox.io/s/mzwmsn

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import PaginatedCasestudies from '../PaginatedCasestudies';

export default function WorkGrid({
	homeData,
	work,
	featWork,
	className = 'content-section has-tinted-background my-work',
}) {
	return (
		<section className={className} id='work'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						{homeData.workTitle && (
							<h2 className='section-title'>
								{homeData.workTitle}
							</h2>
						)}
						{featWork && <FeaturedWork featWork={featWork} />}
						{/* {featWork.map((el) => {
							return (
								<div
									key={el.node.slug}
									className='work-wrapper d-block d-lg-flex featured-work'
								>
									<div className='featured-work-image'>
										<img
											srcSet={
												el.node.featuredImage?.node
													.srcSet
											}
											src={
												el.node.featuredImage?.node
													.sourceUrl
											}
											alt={
												el.node.featuredImage?.node
													.altText
											}
											className='img-fluid'
										/>
									</div>
									<div className='featured-work-description'>
										<h5>Featured</h5>
										<div className='d-flex flex-column justify-content-center h-100 description-wrapper'>
											<h3>{el.node.caseStudyTitle}</h3>
											<div
												className='mini-description'
												dangerouslySetInnerHTML={{
													__html: el.node
														.projectMiniDescription,
												}}
											/>
											<p>
												<Link href={el.node.uri}>
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
							// }
						})} */}
					</div>
				</div>
				{/* <div
					className='grid work-grid'
					style={{ columnGap: 80 + 'px', rowGap: 74 + 'px' }}
				>
					{work.map((el) => {
						return (
							<div
								className='g-col-12 g-col-md-6 work-item'
								key={el.node.slug}
							>
								<div className='card d-flex flex-column'>
									<div className='work-image'>
										<img
											srcSet={
												el.node.featuredImage?.node
													.srcSet
											}
											src={
												el.node.featuredImage?.node
													.sourceUrl
											}
											alt={
												el.node.featuredImage?.node
													.altText
											}
											className='img-fluid'
										/>
									</div>
									<div className='work-description d-flex flex-fill flex-column'>
										<h3>{el.node.caseStudyTitle}</h3>
										<div
											className='mini-description'
											dangerouslySetInnerHTML={{
												__html: el.node
													.projectMiniDescription,
											}}
										/>
										<p className='d-flex flex-fill flex-column align-items-start justify-content-end'>
											<Link href={el.node.uri}>
												<a className='btn stretched-link btn-link btn-link-sm'>
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
				<div className='row'>
					<div className='col text-center'>
						<p className='rgb-button-wrap'>
							<a
								href='#'
								className='btn btn-gradient has-btn-gradient-1'
							>
								View All Projects
							</a>
							<span></span>
						</p>
					</div>
				</div> */}
				<PaginatedCasestudies work={work} />
			</div>
		</section>
	);
}

// export default WorkGrid;
