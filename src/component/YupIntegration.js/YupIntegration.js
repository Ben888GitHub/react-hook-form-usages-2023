import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './yup-validation';
import Select from 'react-select';

const checkboxArray = ['A', 'B', 'C'];

const gender = ['Male', 'Female'];

const departments = [
	{ value: 'Computer-Science', label: 'Computer Science' },
	{ value: 'Physics', label: 'Physics' },
	{ value: 'Chemistry', label: 'Chemistry' },
	{ value: 'Mathematics', label: 'Mathematics' }
];

const YupIntegration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control
		// reset
	} = useForm({
		resolver: yupResolver(schema)
	});

	const handleSave = (formValues) => {
		console.log(formValues);
		// console.log(formValues.password.length);
		// reset();
	};

	return (
		<form onSubmit={handleSubmit(handleSave)}>
			<div>
				<label>Enter username</label>
				<input type="text" placeholder="username" {...register('username')} />
				{errors?.username && <p>{errors.username?.message}</p>}
			</div>

			<div>
				<label>Enter Email</label>
				<input placeholder="email" {...register('email')} />

				{errors?.email && <p>{errors.email?.message}</p>}
			</div>

			<div>
				<label>Enter Password</label>
				<input
					type="password"
					placeholder="password"
					{...register('password')}
				/>

				{errors?.password && <p>{errors.password?.message}</p>}
			</div>

			<div>
				<label>Enter Age</label>
				<input type="number" placeholder="age" {...register('age')} />

				{errors?.age && <p>{errors.age?.message}</p>}
			</div>

			<div>
				<label>Date of Birth</label>
				<input type="date" name="dob" {...register('dob')} />

				{errors?.dob && <p>{errors.dob?.message}</p>}
			</div>

			<div>
				<label>Terms and Conditions</label>
				<input type="checkbox" {...register('termsAndCondition')} />
				{errors?.termsAndCondition && (
					<p>{errors.termsAndCondition?.message}</p>
				)}
			</div>

			<div>
				{checkboxArray.map((checkbox, idx) => (
					<div key={idx} style={{ margin: 7 }}>
						<label>{checkbox}</label>
						<input {...register('skills')} type="checkbox" value={checkbox} />
					</div>
				))}
				{errors?.skills && <p>{errors.skills?.message}</p>}
			</div>

			<div>
				{gender.map((g, idx) => (
					<div key={idx} style={{ margin: 7 }}>
						<label>{g}</label>
						<input type="radio" value={g} {...register('gender')} />
					</div>
				))}
				{errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
			</div>

			<div>
				<label>Website</label>
				<input {...register('website')} />
				{errors.website && <p className="errorMsg">{errors.website.message}</p>}
			</div>
			<br />
			<div className="container">
				<label>Select Department of Interest</label>
				<Controller
					name="department"
					control={control}
					render={({ field }) => <Select {...field} options={departments} />}
				/>
				{errors.department && (
					<p className="errorMsg">{errors.department.message}</p>
				)}
			</div>
			<br />
			<div>
				<label>File Upload</label>
				<input type="file" {...register('picture')} />
				{errors.picture && <p className="errorMsg">{errors.picture.message}</p>}
			</div>

			<div style={{ marginBottom: 15 }}>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default YupIntegration;
