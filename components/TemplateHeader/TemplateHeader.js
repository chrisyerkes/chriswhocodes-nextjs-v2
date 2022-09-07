import Nav from '../Nav';

// import styles from 'TemplateHeader.module.scss';

const TemplateHeader = ({ children, className }) => {
	return (
		<header id='main-header' className={`${className}`}>
			<Nav />
			{children}
		</header>
	);
};

export default TemplateHeader;
