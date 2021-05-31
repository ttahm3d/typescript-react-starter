import "./styles.css";
import logo from "../public/assets/react-icon.png";

const App = () => {
	return (
		<div className="app">
			<h1>React Starter template</h1>
			<img src={logo} alt="React Logo" width="400" height="300" />
			<ul>
				<li>Typescript</li>
				<li>Webpack 5</li>
				<li>SASS</li>
			</ul>
		</div>
	);
};

export default App;
