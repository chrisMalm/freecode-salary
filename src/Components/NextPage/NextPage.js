import React from 'react';
import classes from './NextPage.module.css';

export const NextPage = (props) => {
	const checkedValue = props.checkedValue;
	console.log(checkedValue[0]);
	const setCheckedValue = props.setCheckedValue;
	return (
		<div className={classes.nextPageContainer}>
			{/* map and display each checkedValue conditionally  */}
		</div>
	);
};
