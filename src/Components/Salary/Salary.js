import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import classes from './Salary.module.css';

export const Salary = () => {
	const [salary, setSalary] = useState(0);
	const [yourSalary, setYourSalary] = useState(0);

	const handleChange = (value) => {
		// i think the calc for the salary is wrong, check that
		const yourSalary = Math.trunc((160 * value * 7) / 1.3142);
		setSalary(value);
		setYourSalary(yourSalary);
	};
	return (
		<div className={classes.salaryContainer}>
			<div className={classes.wrapperCalc}>
				<h2>TimTaxa</h2>
				<div className={classes.slider}>
					<Slider
						value={salary}
						min={0}
						max={1200}
						onChange={(value) => handleChange(value)}
					/>
				</div>
			</div>
			<div className={classes.wrapperSalary}>
				<h2>Lön</h2>
				{yourSalary} kr
			</div>
		</div>
	);
};
