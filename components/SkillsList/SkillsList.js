import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const SkillsList = ({
	children,
	homeData,
	skillList,
	className = 'content-section my-skills',
}) => {
	const skills = skillList[0].skillsList;
	return (
		<>
			{skillList && (
				<section className={className}>
					<div className='container'>
						<div className='row'>
							{homeData.skillsTitle && (
								<div className='col-md-4'>
									<h2 className='section-title'>My skills</h2>
								</div>
							)}
							<div
								className={
									homeData.skillsTitle
										? 'col-md-8'
										: 'col-md-12'
								}
							>
								<ul className='skills-list grid'>
									{skills.map((el, i) => {
										return (
											<li
												key={i}
												className='g-col-12 g-col-sm-6'
											>
												<div className='bullet'>
													<FontAwesomeIcon
														icon={faCircleCheck}
													/>
												</div>
												{el}
											</li>
										);
									})}
									{/* <li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										HTML
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										CSS
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										JavaScript
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										PHP
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										WordPress
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										React
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										WP Engine
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										Headless CMS
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										Responsive Development
									</li>
									<li className='g-col-12 g-col-sm-6'>
										<div className='bullet'>
											<FontAwesomeIcon
												icon={faCircleCheck}
											/>
										</div>
										Attention to Design
									</li> */}
								</ul>
							</div>
						</div>
					</div>
					{children}
				</section>
			)}
		</>
	);
};

export default SkillsList;
