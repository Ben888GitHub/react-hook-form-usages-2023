import './App.css';
import RHFInDepth from './component/MoreOnRHF/RHFInDepth';
import SImpleValidation2 from './component/MoreOnRHF/SImpleValidation2';
import SimpleValidation from './component/MoreOnRHF/SimpleValidation';
import SimpleValidation3 from './component/MoreOnRHF/SimpleValidation3';
import SimpleValidationDefaultValue from './component/MoreOnRHF/SimpleValidationDefaultValue';
import StateUpdate from './component/MoreOnRHF/StateUpdate';
import WithReactSelect from './component/MoreOnRHF/WithReactSelect';
import NoRHF from './component/NoRHF';
import UserForm from './component/UserForm';
import WithRHF from './component/WithRHF';

function App() {
	return (
		<div className="App">
			<h1>RHF Utilizations 2023</h1>
			<NoRHF />
			<WithRHF />
			<br />
			<SimpleValidation />
			<br />
			<SImpleValidation2 />
			<br />
			<StateUpdate />
			<br />
			<RHFInDepth />
			<br />
			<WithReactSelect />
			<br />
			<SimpleValidation3 />
			<br />
			<SimpleValidationDefaultValue />
			<br />
			<UserForm />
		</div>
	);
}

export default App;
