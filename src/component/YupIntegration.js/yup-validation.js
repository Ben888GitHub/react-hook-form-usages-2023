import * as yup from 'yup';
import differenceInYears from 'date-fns/differenceInYears';

// const validFileExtensions = {
// 	image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp']
// };

// function isValidFileType(fileName, fileType) {
// 	return (
// 		fileName &&
// 		validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
// 	);
// }

export const schema = yup
	.object({
		username: yup
			.string()
			.required('Username is required')
			.min(4, 'Username must be at least 4 letters long')
			.max(20, 'Username must not be 20 letters long'),
		age: yup
			.number()
			.typeError('age must be a number')
			.required('Age is required')
			.max(70, 'Age is too high')
			.min(18, 'Age is too small'),
		password: yup
			.string()
			.required('Please enter your password')
			.min(8, 'Password must be at least 8 characters long')
			.max(25, 'Password must be at most 25 characters long')
			.matches(
				/(?=.*[a-z])(?=.*[A-Z])\w+/,
				'Password should contain at least one uppercase and lowercase character'
			)
			.matches(/\d/, 'Password should contain at least one number')
			.matches(
				/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
				'Password should contain at least one special character'
			),
		// .matches(
		// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,25}$/,
		// 	'Password must be 8 to 25 characters, one uppercase, one number and one special case character'
		// )
		dob: yup
			.string()
			.required('DOB is required')
			.typeError('Invalid date')
			.matches(
				/^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/,
				'Date of Birth must be a valid date in the format YYYY-MM-DD'
			)
			.test('dob', 'Should be greater than 18', function (value) {
				return differenceInYears(new Date(), new Date(value)) >= 18;
			}),
		email: yup
			.string()
			.email('Please enter a valid email address')
			.max(100)
			.required('Email is required'),
		termsAndCondition: yup
			.bool()
			.oneOf([true], 'You need to accept the terms and conditions'),
		skills: yup
			.array()
			.typeError('Choose at least 1 skill')
			.min(1, 'Choose at least 1 skill'),
		gender: yup.string().required('Choose your gender'),
		website: yup
			.string()
			.required('Please enter website')
			.matches(
				/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
				'Enter correct url!'
			),
		picture: yup
			.mixed()
			// .required('You need to provide a file.')
			.test('required', 'Please select a file', (value) => {
				return value && value.length;
			})
			.test('fileSize', 'Maximum File 2MB', (value) => {
				value && console.log(value[0]?.size);
				return value && value[0]?.size <= 2000000;
			}),
		department: yup.object().required('Please select department')
	})
	.required();
