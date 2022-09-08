import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faCodepen,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
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
						<ul className='nav justify-content-center justify-content-sm-end social-nav white-social-nav'>
							<li className='nav-item linkedin'>
								<a href='#' className='nav-link'>
									<FontAwesomeIcon icon={faLinkedinIn} />
								</a>
							</li>
							<li className='nav-item github'>
								<a href='#' className='nav-link'>
									<FontAwesomeIcon icon={faGithub} />
								</a>
							</li>
							<li className='nav-item codepen'>
								<a href='#' className='nav-link'>
									<FontAwesomeIcon icon={faCodepen} />
								</a>
							</li>
							<li className='nav-item twitter'>
								<a href='#' className='nav-link'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
