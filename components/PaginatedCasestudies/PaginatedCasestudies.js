// Implement Paging later
// https://letmefail.com/react/implement-load-more-pagination-in-react/

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

export default function PaginatedCasestudies({ work }) {
	const [visible, setVisible] = useState(4);
	const showMoreWork = (e) => {
		e.preventDefault();
		setVisible((prevValue) => prevValue + 4);
	};
	return (
		<>
			<div
				className='grid work-grid'
				style={{ columnGap: 80 + 'px', rowGap: 74 + 'px' }}
			>
				{work?.slice(0, visible).map((el) => {
					return (
						<div
							className='g-col-12 g-col-md-6 work-item'
							key={el.node.slug}
						>
							<div className='card d-flex flex-column'>
								<div className='work-image'>
									<Image
										// srcSet={
										// 	el.node.featuredImage?.node
										// 		.srcSet
										// }
										src={
											el.node.featuredImage?.node
												.sourceUrl
										}
										alt={
											el.node.featuredImage?.node
												.altText
										}
										width={el.node.featuredImage?.node?.mediaDetails.width}
										height={el.node.featuredImage?.node?.mediaDetails.height}
										layout='responsive'
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
							onClick={showMoreWork}
						>
							View All Projects
						</a>
						<span></span>
					</p>
				</div>
			</div>
		</>
	);
}

// export default WorkGrid;
