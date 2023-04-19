// import { DevTool } from '@hookform/devtools';
import { useForm, useFormState } from 'react-hook-form';

// * Validation can be made easy using Yup

const SimpleValidation = () => {
	const {
		handleSubmit,
		register,
		// getValues,
		formState: { errors, touchedFields, submitCount, defaultValues },
		// setValue,
		// reset,
		control
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			isAdmin: true,
			createdAt: '',
			bio: ''
		}
	});

	// const values = getValues();

	const { dirtyFields } = useFormState({ control });

	const onSubmit = (user) => {
		console.log(user); // todo, this is the registered field. But how can we retrieve it and display on the page without useState

		console.log(touchedFields);
		console.log(dirtyFields);
		console.log(submitCount);
		// setValue((formValue) => ({ ...formValue, user }));

		console.log(defaultValues);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>
					Validation with validate() method and different validation
					implementation
				</h1>
				<div>
					<label>Username</label>
					{/* username, required, minimum 5 chars, must have only letters, numbers, underscore */}
					<input
						type="text"
						{...register('username', {
							required: true,
							validate: {
								minLength: (v) => v.length >= 5,
								matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v)
							}
						})}
					/>
					{/* Hard-coded Validation */}
					{errors?.username && (
						<p>
							he username is required, it should have at least 5 characters, and
							it must contain only letters, numbers and underscore
						</p>
					)}
				</div>

				<div>
					<label>Email</label>
					{/* Dynamic Validation, but it happens before submitting */}
					<input
						type="email"
						{...register('email', {
							required: 'email is required',
							validate: {
								maxLength: (v) =>
									v.length <= 20 ||
									'The email should have at most 50 characters',
								matchPattern: (v) =>
									/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
									'Email address must be a valid address'
							}
						})}
					/>
					{errors?.email && errors?.email?.message}
				</div>

				<div>
					<label>IsAdmin</label>
					<input type="checkbox" {...register('IsAdmin')} />
				</div>

				<div>
					<label>Creation Date</label>
					<input
						type="date"
						{...register('createdAt', {
							required: 'Date is required',
							valueAsDate: true
						})}
					/>
					{errors.createdAt && errors.createdAt.message}
				</div>

				<div>
					<label>Bio</label>
					<input
						type="text"
						{...register('bio', {
							required: 'bio is required'
						})}
					/>
					{errors.bio && errors.bio.message}
				</div>
				<button type="submit">Submit</button>
			</form>
			{/* <DevTool control={control} /> */}
		</>
	);
};

export default SimpleValidation;
