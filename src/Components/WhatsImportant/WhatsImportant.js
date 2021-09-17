import React, { useEffect } from 'react';
import classes from './WhatsImporttant.module.css';

export const WhatsImportant = (props) => {
	const checkedValue = props.checkedValue;
	const setCheckedValue = props.setCheckedValue;
	const btnClicked = props.btnClicked;
	const setBtnClicked = props.setBtnClicked;

	useEffect(() => {}, [setCheckedValue, checkedValue]);

	const handleChange = (e) => {
		console.log(e.target.value, 'e');
		if (e.target.checked) {
			const value = e.target.value;
			setCheckedValue((checkedValue) => [...checkedValue, value]);
		} else {
			const test1 = e.target.value;
			const test = checkedValue.filter((value) => value !== test1);
			console.log(test, 'tom arr');
			setCheckedValue(test);
		}
	};

	return (
		<div className={classes.whatsImportantContainer}>
			<h2 className={classes.text}>Vad är viktigast för dig utöver lönen?</h2>
			<div className={classes.wrapperinputs}>
				<div className={classes.input}>
					<input
						type='checkbox'
						id='uppdrag'
						name='uppdrag'
						value='uppdrag'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='uppdrag'>Rätt Uppdrag</label>
				</div>
				<div className={classes.input}>
					{' '}
					<input
						type='checkbox'
						id='Pension'
						value='Pension'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='Pension'>Pension</label>
				</div>
				<div className={classes.input}>
					<input
						type='checkbox'
						id='Kompetensutveckling'
						value='Kompetensutveckling'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='Kompetensutveckling'>Kompetensutveckling</label>
				</div>
				<div className={classes.input}>
					<input
						type='checkbox'
						id='Semester'
						value='Semester'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='Semester'>Semester</label>
				</div>
				<div className={classes.input}>
					<input
						type='checkbox'
						id='Flexibilitet'
						value='Flexibilitet'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='Flexibilitet'>Flexibilitet</label>
				</div>
				<div className={classes.input}>
					{' '}
					<input
						type='checkbox'
						id='förmåner'
						value='förmåner'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='förmåner'>Andra förmåner</label>
				</div>
			</div>
			<div>
				<button onClick={() => setBtnClicked(!btnClicked)}>click me</button>
			</div>
		</div>
	);
};
