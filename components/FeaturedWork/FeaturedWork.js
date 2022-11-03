import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedWork({ featWork }) {
	return (
		<>
			{featWork.map((el) => {
				return (
					<div
						key={el.node.slug}
						className='work-wrapper d-block d-lg-flex featured-work'
					>
						<div className='featured-work-image'>
							<Image
								// srcSet={el.node.featuredImage?.node.srcSet}
								src={el.node.featuredImage?.node.sourceUrl}
								alt={el.node.featuredImage?.node.altText}
								width={el.node.featuredImage?.node?.mediaDetails.width}
								height={el.node.featuredImage?.node?.mediaDetails.height}
								layout='responsive'
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
										__html: el.node.projectMiniDescription,
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
			})}
		</>
	);
}
