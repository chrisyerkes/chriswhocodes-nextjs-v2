import Nav from '../Nav';

// import styles from 'TemplateHeader.module.scss';

const TemplateHeader = ({ pageCheck, children, className }) => {
	return (
		<header id='main-header' className={`${className}`}>
			<Nav currPage={pageCheck} />
			{children}
		</header>
	);
};

export default TemplateHeader;
