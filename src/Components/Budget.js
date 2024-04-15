import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../Context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);
	// console.log(isEditing)
    //  console.log(dispatch)
	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		const newBudget = Number(value)
		// console.log(newBudget)
		dispatch({
			type: 'SET_BUDGET',
			payload: newBudget,
		});
		setIsEditing(false);
	};
//   console.log(isEditing)
	return (
		<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ?
			// console.log(isEditing) 
			(	
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;