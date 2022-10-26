import React, { useEffect, useRef, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

// import Lightswitch from '../Lightswitch';
const Lightswitch = dynamic(() => import('../Lightswitch'), {
	ssr: false,
});
import Section from '../Section';

// import styles from './Nav.module.scss';
import NavListItem from '../NavListItem';

export default function Nav({ siteSettings, currPage, currMenu }) {
	const menuItems = currMenu[0].node.menuItems?.edges;
	// Transforms flat list of menu items into tiered list for things like sub menus to work
	const flatListToHierarchical = (
		data = [],
		{ idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
	) => {
		const tree = [];
		const childrenOf = {};
		data.forEach((el) => {
			const item = el.node;
			const newItem = { ...item };
			const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
			childrenOf[id] = childrenOf[id] || [];
			newItem[childrenKey] = childrenOf[id];
			parentId
				? (childrenOf[parentId] = childrenOf[parentId] || []).push(
						newItem
				  )
				: tree.push(newItem);
		});
		return tree;
	};
	const hierarchicalMenu = flatListToHierarchical(menuItems);
	const [show, setShow] = useState(false);
	
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	function PageCheck() {
		if (currPage != 'home') {
			return (
				<a className='navbar-brand' href='/'>
					Chris Yerkes
				</a>
			);
		} else {
			return null;
		}
	}
	function onClickHandler() {
		handleClose();
	}
	return (
		<>
			<nav className='navbar navbar-expand-md'>
				<div className='container'>
					<PageCheck />
					<button
						onClick={handleShow}
						className='navbar-toggler'
						type='button'
						// data-bs-toggle='offcanvas'
						// data-bs-target='#navbarNav'
						// aria-controls='navbarNav'
						// aria-expanded='false'
						// aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					{/* <div
						className='offcanvas offcanvas-end mobile-offcanvas'
						data-bs-backdrop='false'
						data-bs-scroll='true'
						tabIndex='-1'
						id='navbarNav'
					>
						<div className='offcanvas-header'>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							>
								<FontAwesomeIcon icon={faXmark} />
							</button>
						</div>
						<div className='offcanvas-body'> */}
					<Offcanvas restoreFocus={false} className='offcanvas mobile-offcanvas' show={show} onHide={handleClose} scroll={true} backdrop={false} placement='end' name='end' responsive='md'>
						<Offcanvas.Header>
							<button
								type='button'
								className='btn-close'
								// data-bs-dismiss='offcanvas'
								aria-label='Close'
								onClick={handleClose}
							>
								<FontAwesomeIcon icon={faXmark} />
							</button>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<ul className='navbar-nav mx-auto mx-lg-0 ms-lg-auto h-100 main-nav'>
								{hierarchicalMenu?.map((listItem) => {
									return (
										<NavListItem
											key={listItem.id}
											item={listItem}
											currPage={currPage}
											siteSettings={siteSettings}
											clickAction={onClickHandler}
										/>
									);
								})}
								<Lightswitch />
							</ul>
						</Offcanvas.Body>
					</Offcanvas>
							

								{/* <li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
									>
										Services
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Work
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Skills
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Contact
									</a>
								</li> */}
								{/* <li className='nav-item d-flex align-items-center mt-auto light-switch-wrap'>
									<button className='light-switch off'>
										<span className='status-icon'>
											<i className='fa-regular fa-sun'></i>
											<i className='fa-solid fa-moon'></i>
										</span>
									</button>
								</li>
								<Lightswitch />
							</ul>
						</div>
					</div> */}
				</div>
			</nav>
			{/* <nav className={styles.nav}>
        <Section className={styles.navSection}>
          <p className={styles.navName}>
            <Link href="/">
              <a>{title}</a>
            </Link>
          </p>
          <ul className={styles.navMenu}>
            {navigation?.map((listItem) => {
              return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
            })}
          </ul>
          <div className={styles.navSearch}>
            {searchVisibility === SEARCH_HIDDEN && (
              <button onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
                <span className="sr-only">Toggle Search</span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            )}
            {searchVisibility === SEARCH_VISIBLE && (
              <form ref={formRef} action="/search" data-search-is-active={!!query}>
                <input
                  type="search"
                  name="q"
                  value={query || ''}
                  onChange={handleOnSearch}
                  autoComplete="off"
                  placeholder="Search..."
                  required
                />
                <div className={styles.navSearchResults}>
                  {results.length > 0 && (
                    <ul>
                      {results.map(({ slug, title }, index) => {
                        return (
                          <li key={slug}>
                            <Link tabIndex={index} href={postPathBySlug(slug)}>
                              <a>{title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {results.length === 0 && (
                    <p>
                      Sorry, not finding anything for <strong>{query}</strong>
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Section>
      </nav> */}
		</>
	);
}

// export default Nav;
