import Nav from '../Nav';

// import styles from 'TemplateHeader.module.scss';

export default function TemplateHeader({
	pageCheck,
	children,
	className,
	currMenu,
}) {
	return (
		<header id='main-header' className={`${className}`}>
			<Nav currPage={pageCheck} currMenu={currMenu} />
			{children}
		</header>
	);
}

// export default TemplateHeader;
