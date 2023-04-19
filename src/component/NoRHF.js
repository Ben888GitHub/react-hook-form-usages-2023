import { useState } from 'react';

const NoRHF = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	// * Submit button can be login or reservation
	const handleSubmit = (e) => {
		e.preventDefault();

		// * Validation without library
		const passwordPattern =
			/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
		if (!passwordPattern.test(user.password)) {
			alert(
				'Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.'
			);
			return;
		}

		alert(
			'The email address and password are ' +
				user.email +
				' and ' +
				user.password +
				' respectively.'
		);
		console.log(user);
	};

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<>
			{/* form action attribute specifies WHERE to send the form-data when a form is submitted */}
			<form onSubmit={handleSubmit} autoComplete="off">
				<h1>Register</h1>
				<div className="formInput">
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={user.email}
						placeholder="Enter your email..."
						onChange={handleChange}
						required
					/>
				</div>
				<div className="formInput">
					<label>Password</label>
					<input
						required
						type="password"
						name="password"
						value={user.password}
						placeholder="Enter a strong password..."
						// pattern="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}"
						onChange={handleChange}
					/>
				</div>
				<button>Submit</button>
			</form>
		</>
	);
};

export default NoRHF;
