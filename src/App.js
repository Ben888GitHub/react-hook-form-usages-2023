import './App.css';
import SImpleValidation2 from './component/MoreOnRHF/SImpleValidation2';
import SimpleValidation from './component/MoreOnRHF/SimpleValidation';
import StateUpdate from './component/MoreOnRHF/StateUpdate';
import NoRHF from './component/NoRHF';
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
		</div>
	);
}

export default App;
