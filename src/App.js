import './App.css';
import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { Salary } from './Components/Salary/Salary';
import { WhatsImportant } from './Components/WhatsImportant/WhatsImportant';
import { NextPage } from './Components/NextPage/NextPage';
export const App = () => {
	const [btnClicked, setBtnClicked] = useState(false);
	const [checkedValue, setCheckedValue] = useState([]);

	return (
		<div className='mainContainer'>
			{btnClicked ? (
				<NextPage
					checkedValue={checkedValue}
					setCheckedValue={setCheckedValue}
				/>
			) : (
				<div>
					<Header />
					<Salary />
					<WhatsImportant
						btnClicked={btnClicked}
						setBtnClicked={setBtnClicked}
						checkedValue={checkedValue}
						setCheckedValue={setCheckedValue}
					/>
				</div>
			)}
		</div>
	);
};
