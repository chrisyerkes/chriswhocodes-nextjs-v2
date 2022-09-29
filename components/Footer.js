import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faCodepen,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer({ social }) {
	return (
		<footer id='main-footer'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-sm-6 text-center text-sm-start mb-3 mb-sm-0'>
						<p className='name'>Chris Yerkes</p>
						<p className='copyright'>
							&copy; {new Date().getFullYear()} Mops Digital, LLC.
							All rights reserved.
						</p>
					</div>
					<div className='col-sm-6 footer-social-nav'>
						{(social.linkedinProfile ||
							social.linkedinProfile === null) &&
							(social.githubProfile ||
								social.githubProfile === null) &&
							(social.codepenProfile ||
								social.codepenProfile === null) &&
							(social.twitterProfile ||
								social.twitterProfile === null) && (
								<ul className='nav justify-content-center justify-content-sm-end social-nav white-social-nav'>
									{social.linkedinProfile && (
										<li className='nav-item linkedin'>
											<a
												href={social.linkedinProfile}
												target='_blank'
												className='nav-link'
											>
												<FontAwesomeIcon
													icon={faLinkedinIn}
												/>
											</a>
										</li>
									)}
									{social.githubProfile && (
										<li className='nav-item github'>
											<a
												href={social.githubProfile}
												target='_blank'
												className='nav-link'
											>
												<FontAwesomeIcon
													icon={faGithub}
												/>
											</a>
										</li>
									)}
									{social.codepenProfile && (
										<li className='nav-item codepen'>
											<a
												href={social.codepenProfile}
												target='_blank'
												className='nav-link'
											>
												<FontAwesomeIcon
													icon={faCodepen}
												/>
											</a>
										</li>
									)}
									{social.twitterProfile && (
										<li className='nav-item twitter'>
											<a
												href={social.twitterProfile}
												target='_blank'
												className='nav-link'
											>
												<FontAwesomeIcon
													icon={faTwitter}
												/>
											</a>
										</li>
									)}
								</ul>
							)}
					</div>
				</div>
			</div>
		</footer>
	);
}
