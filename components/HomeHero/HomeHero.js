import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faCodepen,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Clack from '../../public/static-assets/images/sprites/sfx_clack_single.png';
import ClackClack from '../../public/static-assets/images/sprites/sfx_clack_double.png';
import ArmLeft from '../../public/static-assets/images/sprites/chris_arm_left.png';
import ArmRight from '../../public/static-assets/images/sprites/chris_arm_right.png';
import Body from '../../public/static-assets/images/sprites/chris_body_and_pugs.png';

const HomeHero = ({
	children,
	homeData,
	social,
	className = 'content-section hero',
}) => {
	const heroCTA = homeData?.heroCta;
	// Hero animation
	// animation check script
	// const animationToggle = document.querySelector('.animation-toggle');
	// animationToggle.addEventListener('click', function () {
	// 	animation.classList.toggle('animating');
	// });
	// Creating a function that controls the animation using a random number system
	let randomAnimation = (animation, min, max) => {
		// Get a random number between min and max
		let num = Math.floor(Math.random() * (max - min + 1)) + min,
			// Generating a random number to determine length of animation to play
			animLengthSeed = Math.floor(Math.random() * 100),
			// Animation total length variable
			animLength;
		// If the random number is less than or equal to 33, play the animation for 3.2 seconds
		if (animLengthSeed <= 33) {
			animLength = 3200;
			// If the random number is between 33 and 66, play the animation for 6.4 seconds
		} else if (animLengthSeed > 33 && animLengthSeed <= 66) {
			animLength = 6400;
			// If the random number is between 66 and 100, play the animation for 9 seconds
		} else {
			animLength = 9000;
		}
		// Add class that turns on animation
		animation.classList.add('animating');
		// Checking numbers to determine which animation to play
		// console.log(animLengthSeed);
		// console.log(animLength);

		// Timer to remove the animation class after the animation is finished
		setTimeout(() => {
			animation.classList.remove('animating');

			// Recursive function to play the animation again
			setTimeout(() => {
				randomAnimation(animation, min, max);
			}, num);
		}, animLength);
	};
	React.useEffect(() => {
		const animation = document.querySelector('.chris-animated-container');
		// Initial call of the function to start the hero animation sequence
		if (animation) {
			randomAnimation(animation, 1000, 10000);
		}
	}, []);

	return (
		<section className={className}>
			<div className='container'>
				<div className='row social-row'>
					<div className='col'>
						<svg
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							className='svg-settings'
						>
							<defs>
								<linearGradient
									id='linear-green-blue'
									gradientTransform='rotate(90)'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='0%'
								>
									<stop
										className='linear-stop1'
										offset='0%'
									></stop>
									<stop
										className='linear-stop2'
										offset='100%'
									></stop>
								</linearGradient>
								<linearGradient
									id='linear-yellow-pink'
									gradientTransform='rotate(110)'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='0%'
								>
									<stop
										className='linear-stop1'
										offset='0%'
									></stop>
									<stop
										className='linear-stop2'
										offset='100%'
									></stop>
								</linearGradient>
								<linearGradient
									id='linear-pink-blue'
									gradientTransform='rotate(110)'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='0%'
								>
									<stop
										className='linear-stop1'
										offset='0%'
									></stop>
									<stop
										className='linear-stop2'
										offset='100%'
									></stop>
								</linearGradient>
								<linearGradient
									id='linear-teal-blue'
									gradientTransform='rotate(110)'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='0%'
								>
									<stop
										className='linear-stop1'
										offset='0%'
									></stop>
									<stop
										className='linear-stop2'
										offset='100%'
									></stop>
								</linearGradient>
							</defs>
						</svg>
						{(social.linkedinProfile ||
							social.linkedinProfile === null) &&
							(social.githubProfile ||
								social.githubProfile === null) &&
							(social.codepenProfile ||
								social.codepenProfile === null) &&
							(social.twitterProfile ||
								social.twitterProfile === null) && (
								<ul className='nav social-nav justify-content-end d-md-none d-lg-flex justify-content-lg-start'>
									{social.linkedinProfile && (
										<li className='nav-item linkedin'>
											<a
												href={social.linkedinProfile}
												target='_blank'
												className='nav-link'
											>
												{/* <i className="fab fa-linkedin-in"></i> */}
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
												{/* <i className="fa-brands fa-github"></i> */}
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
												{/* <i className="fa-brands fa-codepen"></i> */}
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
												{/* <i className="fab fa-twitter"></i> */}
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
				<div className='row row-cols-1 row-cols-lg-2 align-items-center'>
					<div className='col-lg-7 order-last order-lg-first hero-left'>
						<div className='row'>
							<div className='col'>
								<h1 className='d-none d-lg-block hero-title animation-toggle'>
									Chris Yerkes
								</h1>
								{homeData.heroSubtitle && (
									<p
										className='hero-subtitle'
										dangerouslySetInnerHTML={{
											__html: homeData.heroSubtitle,
										}}
									/>
								)}
								{heroCTA && (
									<p className='m-0 text-center text-lg-start'>
										<a
											href={heroCTA ? heroCTA.url : null}
											target={
												heroCTA ? heroCTA.target : null
											}
											className='btn btn-link has-arrow-right has-gradient-1'
										>
											{heroCTA.title
												? heroCTA.title + ' '
												: 'backup '}
											<FontAwesomeIcon
												icon={faArrowRight}
											/>
										</a>
									</p>
								)}
							</div>
						</div>
					</div>
					<div className='col-lg-5 hero-right'>
						<p className='h1 d-lg-none hero-title text-center'>
							Chris Yerkes
						</p>
						<div className='chris-animated-container'>
							<div className='sfx sfx-clack-single'>
								<img
									src={Clack.src}
									alt='Keyboard clack sound effect'
								/>
							</div>
							<div className='sfx sfx-clack-double'>
								<img
									src={ClackClack.src}
									alt='Keyboard clack sound effect'
								/>
							</div>
							<div className='character character-body'>
								<img
									src={Body.src}
									alt='Chris and his pugs working on his laptop'
								/>
							</div>
							<div className='character character-left-arm'>
								<img src={ArmLeft.src} alt="Chris's left arm" />
							</div>
							<div className='character character-right-arm'>
								<img
									src={ArmRight.src}
									alt="Chris's right arm"
								/>
							</div>
							<div className='pug pug-henry'></div>
							<div className='pug pug-peppa'></div>
						</div>
						{(social.linkedinProfile ||
							social.linkedinProfile === null) &&
							(social.githubProfile ||
								social.githubProfile === null) &&
							(social.codepenProfile ||
								social.codepenProfile === null) &&
							(social.twitterProfile ||
								social.twitterProfile === null) && (
								<ul className='nav social-nav d-none d-md-flex d-lg-none justify-content-center'>
									{social.linkedinProfile && (
										<li className='nav-item linkedin'>
											<a
												href={social.linkedinProfile}
												target='_blank'
												className='nav-link'
											>
												{/* <i className="fab fa-linkedin-in"></i> */}
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
												{/* <i className="fa-brands fa-github"></i> */}
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
												{/* <i className="fa-brands fa-codepen"></i> */}
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
												{/* <i className="fab fa-twitter"></i> */}
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
			{children}
		</section>
	);
};

export default HomeHero;
