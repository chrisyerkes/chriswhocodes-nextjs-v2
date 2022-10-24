import Link from 'next/link';
import { useRouter } from 'next/router';

const NavListItem = ({ siteSettings, item, currPage }) => {
	const nestedItems = (item.children || []).map((item) => {
		return <NavListItem key={item.id} item={item} />;
	});
	const router = useRouter();
	
	return (
		<li key={item.id} className='nav-item'>
			{!item.path.includes('http') && !item.target && !item.cssClasses.includes('home-anchor') && !currPage == 'home' && (
				<Link href={item.path}>
					<a title={item.title} className='nav-link'>
						{item.label}
					</a>
				</Link>
			)}
			{currPage == 'home' && (
				<Link href={item.path}>
					<a title={item.title} className='nav-link'>
						{item.label}
					</a>
				</Link>
			)}
			{currPage !== 'home' && item.cssClasses.includes('home-anchor') && (
				<Link href={`/${item.path}`}>
					<a title={item.title} className='nav-link'>
						{item.label}
					</a>
				</Link>
			)}
			{currPage !== 'home' && !item.cssClasses.includes('home-anchor') && (
				<Link href={item.path}>
					<a title={item.title} className='nav-link'>
						{item.label}
					</a>
				</Link>
			)}
			
			{item.path.includes('http') && (
				<a
					href={item.path}
					title={item.title}
					className='nav-link'
					target={item.target}
				>
					{item.label}
				</a>
			)}

			{nestedItems.length > 0 && (
				<ul className='sub-menu'>{nestedItems}</ul>
			)}
		</li>
	);
};

export default NavListItem;
