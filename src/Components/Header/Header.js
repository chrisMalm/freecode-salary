import React from 'react';
import classes from './Header.module.css';
import headerLogo from '../assets/FreeCode Logotyp Medium size Inverted.png';

export const Header = () => {
	return (
		<div className={classes.headerContainer}>
			<img className={classes.headerLogo} src={headerLogo}></img>
		</div>
	);
};
