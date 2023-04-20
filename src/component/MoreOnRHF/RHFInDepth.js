import { useForm } from 'react-hook-form';

const RHFInDepth = () => {
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
			<h1>More In-Depth Usages</h1>
			<div>
				<label>Email</label>
				<input
					type="email"
					name="email"
					{...register('email', {
						required: 'Email is required',
						validate: {
							matchPattern: (v) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
								'Email address must be a valid address'
						}
					})}
				/>
				{errors?.email && errors?.email?.message}
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					{...register('password', {
						required: 'Password is required',
						validate: {
							minLength: (psw) =>
								psw.length >= 6 || 'Password must be at least 6 characters',
							maxLength: (psw) =>
								psw.length <= 20 || 'Password maximum is 20 characters',
							matchPattern: (psw) =>
								/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(
									psw
								) ||
								'Password requirements: at least  1 number, 1 letter, 1 symbol.'
						}
					})}
				/>
				{errors?.password && errors?.password?.message}
			</div>
			<div>
				<button type="submit">Log in</button>
			</div>
			<br />
		</form>
	);
};

export default RHFInDepth;
