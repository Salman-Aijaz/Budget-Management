import React, { useEffect, useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	

	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => {
				return	setValue(event.target.value)
				}}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => {
					// console.log(props)
					return props.handleSaveClick(value)
				}}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;