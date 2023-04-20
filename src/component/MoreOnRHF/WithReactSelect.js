import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const departments = [
	{ value: 'Computer-Science', label: 'Computer Science' },
	{ value: 'Physics', label: 'Physics' },
	{ value: 'Chemistry', label: 'Chemistry' },
	{ value: 'Mathematics', label: 'Mathematics' }
];

const WithReactSelect = () => {
	// * With External Library wrapped under Controller, we don't use register() function
	// * It's handled by Controller and control in React Hook Form
	// * data is ready upon handleSubmit()

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset(); // reset form after submission
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Select Department of Interest</label>
				<Controller
					name="department"
					control={control}
					rules={{ required: 'Please select department' }}
					render={({ field }) => (
						<Select {...field} isMulti options={departments} />
					)}
				/>
				{errors?.department && errors?.department?.message}
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default WithReactSelect;
