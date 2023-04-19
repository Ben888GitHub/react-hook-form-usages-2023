import { useForm } from 'react-hook-form';

const checkboxArray = ['A', 'B', 'C'];

const radioButtonArray = ['A', 'B', 'C'];

const categoryList = [
	{
		value: '',
		content: 'Select...'
	},
	{
		value: 'A',
		content: 'Category A'
	},
	{
		value: 'B',
		content: 'Category B'
	}
];

const SImpleValidation2 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	// const values = getValues();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Validation with Checkbox and Radio button</h1>
			<div>
				<input
					{...register('firstName', {
						required: 'First Name is Required',
						validate: {
							minLength: (words) =>
								words.length >= 3 || 'Name must be at least 3 characters'
						}
					})}
					placeholder="First name"
				/>
				<small> {errors?.firstName && errors?.firstName?.message}</small>
			</div>
			<br />
			<div>
				<input
					{...register('lastName', {
						minLength: 2
					})}
					placeholder="Last name"
				/>
			</div>
			<br />
			<div>
				<select
					{...register('category', {
						required: 'Please select one'
					})}
				>
					{categoryList.map((ctg, idx) => (
						<option value={ctg.value} key={idx}>
							{ctg.content}
						</option>
					))}
				</select>
				<small> {errors?.category && errors?.category?.message}</small>
			</div>
			<br />

			<div>
				{checkboxArray.map((checkbox, idx) => (
					<input
						{...register('checkbox')}
						key={idx}
						type="checkbox"
						value={checkbox}
					/>
				))}
			</div>
			<br />
			<div>
				{radioButtonArray.map((radio, idx) => (
					<input
						{...register('radio', {
							required: 'select one radio'
						})}
						key={idx}
						type="radio"
						value={radio}
					/>
				))}
				<small> {errors?.radio && errors?.radio?.message}</small>
			</div>
			<br />
			<input type="submit" />
		</form>
	);
};

export default SImpleValidation2;
