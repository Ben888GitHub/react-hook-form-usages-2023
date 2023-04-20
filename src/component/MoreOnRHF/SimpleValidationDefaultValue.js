import { useForm } from 'react-hook-form';

const gender = ['Male', 'Female'];

const skills = ['React', 'Node', 'Angular'];

const initialValues = {
	gender: 'Male',
	skills: {
		React: true,
		Node: true,
		Angular: false
	}
};

const SimpleValidationDefaultValue = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			gender: initialValues.gender,
			skills: Object.keys(initialValues.skills).filter(
				(item) => initialValues.skills[item] === true
			)
		}
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				{gender.map((g, idx) => (
					<input
						key={idx}
						type="radio"
						label={g}
						value={g}
						{...register('gender', {
							required: 'Please select your gender'
						})}
					/>
				))}
				{errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
			</div>
			<div>
				{skills.map((skill, idx) => (
					<input
						type="checkbox"
						value={skill}
						label={skill}
						key={idx}
						{...register('skills', {
							required: 'Please select at-least one skill'
						})}
					/>
				))}
				{errors?.skills && errors?.skills?.message}
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleValidationDefaultValue;
