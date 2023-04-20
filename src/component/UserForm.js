// import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const user = {
	name: 'She-hulk',
	email: 'jen@hlk.com',
	website: 'www.she-hulk.com',
	country: 'usa'
};

const countryOptions = [
	{ value: 'asgard', label: 'Asgard' },
	{ value: 'scotland', label: 'Scotland' },
	{ value: 'usa', label: 'USA' }
];

const UserForm = () => {
	// const [userData, setUserData] = useState(user);

	const {
		handleSubmit,
		register,
		formState: { errors },
		control
	} = useForm({
		defaultValues: user
	});

	const handleSave = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(handleSave)}>
			<h1>Yup Validation</h1>
			<div>
				<label>Name</label>
				<input
					{...register('name', {
						required: 'Name is required',
						validate: {
							minLength: (words) =>
								words.length >= 3 || 'Name must be at least 3 characters'
						}
					})}
				/>
				<small style={{ color: 'red' }}>
					{' '}
					{errors?.name && errors?.name?.message}
				</small>
			</div>

			<div>
				<label>Email</label>
				<input
					{...register('email', {
						required: 'Email is required',
						validate: {
							matchPattern: (v) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
								'Email address must be a valid address'
						}
					})}
				/>
				<small style={{ color: 'red' }}>
					{' '}
					{errors?.email && errors?.email?.message}
				</small>
			</div>

			<div>
				<label>Password</label>
				<input
					type="password"
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
				<small style={{ color: 'red' }}>
					{' '}
					{errors?.password && errors?.password?.message}
				</small>
			</div>

			<div>
				<label>Website</label>
				<input
					{...register('website', {
						required: 'Website is required'
					})}
				/>
				<small style={{ color: 'red' }}>
					{' '}
					{errors?.website && errors?.website?.message}
				</small>
			</div>

			<div>
				<label>Age</label>
				<input
					{...register('age', {
						required: 'Age is required',
						validate: {
							min: (age) => age >= 18 || "You're underage",
							max: (age) => age <= 71 || 'Too dangerous for your age'
						}
					})}
				/>
				<small style={{ color: 'red' }}>
					{' '}
					{errors?.age && errors?.age?.message}
				</small>
			</div>

			<div>
				<label>Country</label>
				<Controller
					name="country"
					control={control}
					render={({ field }) => <Select {...field} options={countryOptions} />}
				/>
			</div>

			<div>
				<button type="submit">Save</button>
			</div>
		</form>
	);
};

export default UserForm;
