import { useForm } from 'react-hook-form';

// * register, is to register an input or select element and apply validation rules
// * with register, onChange and state is no longer needed

// * handleSubmit() is to trigger after validated form input
const WithRHF = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	const onSubmit = (user) => console.log(user);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Register</h1>
			<div className="formInput">
				<label>Email</label>
				<input
					type="email"
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'invalid email address'
						}
					})}
				/>
				{errors.email && errors.email.message}
			</div>
			{/*  */}
			<div className="formInput">
				<label>Password</label>
				<input
					type="password"
					{...register('password', {
						required: 'Password is required',
						// minLength: 8,
						// maxLength: 20,
						pattern: {
							value:
								/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,

							message:
								'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.'
						}
					})}
				/>
				{errors.password && errors.password.message}
			</div>
			{/*  */}
			<div className="formInput">
				<label>Optional Input</label>
				<input
					type="text"
					{...register('optional_input', {
						required: 'Optional field is required',
						minLength: {
							value: 5,
							message: 'minimum 5 characters'
						}
					})}
				/>
				{errors.optional_input && errors.optional_input.message}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default WithRHF;
