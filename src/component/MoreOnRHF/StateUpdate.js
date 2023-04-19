import { useState } from 'react';
import { useForm } from 'react-hook-form';

const StateUpdate = () => {
	// here, you can put default value and update it based on the condition
	const [data, setData] = useState({});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (user) => setData(user);

	// data && console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Update state with the form data upon submission</h1>
			<div>
				<label>Username</label>
				{/* username, required, minimum 5 chars, must have only letters, numbers, underscore */}
				<input
					{...register('username', {
						required: 'Username is Required',
						validate: {
							minLength: (words) =>
								words.length >= 3 || 'Name must be at least 3 characters',
							matchPattern: (v) =>
								/^[a-zA-Z0-9_]+$/.test(v) || 'Please use a valid Username'
						}
					})}
					placeholder="Username"
				/>
				<small> {errors?.username && errors?.username?.message}</small>
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
								v.length <= 20 || 'The email should have at most 50 characters',
							matchPattern: (v) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
								'Email address must be a valid address'
						}
					})}
					placeholder="Email"
				/>
				<small>{errors?.email && errors?.email?.message}</small>
			</div>
			<button type="submit">Submit</button>
			{data && (
				<>
					<h3>{data.username}</h3>
					<h3>{data.email}</h3>
				</>
			)}
		</form>
	);
};

export default StateUpdate;
