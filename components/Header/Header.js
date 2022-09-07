import Container from '../Container';

// import styles from './Header.module.scss';

const Header = ({ children }) => {
	return (
		<header>
			<Container>{children}</Container>
		</header>
	);
};

export default Header;
