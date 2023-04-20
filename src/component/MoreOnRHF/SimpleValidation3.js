import { useForm } from 'react-hook-form';

const gender = ['Male', 'Female'];

const skills = ['ReactJs', 'NextJs', 'SAAS'];

const SimpleValidation3 = () => {
	const {
		register,
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
			<h1>Validation with Required Checkbox and Radio button</h1>
			<div>
				<label>Email</label>
				<input
					// type="email"
					// name="email"
					{...register('email', {
						required: 'Email is required',
						validate: {
							matchPattern: (v) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
								'Email address must be a valid address'
						}
					})}
					placeholder="Email"
				/>
				{errors?.email && errors?.email?.message}
			</div>
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

export default SimpleValidation3;
