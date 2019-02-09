import React from 'react';
import styles from './index.module.sass';

const min = 0;
const max = 4;

const Header = () => {
	return <section className={styles.header}>
		<div className={styles.logo}>
			XHASH
		</div>
		<div className={styles.pagination}>
			<div className={styles.page}>1</div>
			<div className={styles.page}>2</div>
			<div className={styles.page}>3</div>
			<div className={styles.page}>4</div>
		</div>
	</section>
};

export default Header;