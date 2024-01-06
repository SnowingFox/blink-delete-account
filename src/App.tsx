import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { button } from 'mdui/functions/button.js';

function App() {
	return (
		<div className="App" style={{display: 'grid', gap: 20}}>
			<input style={{padding: 10, width: '200px'}} placeholder={'Please input your blink UID'}/>
			<mdui-button onClick={() => {
				setTimeout(() => {
					alert('Delete account success!')
					window.location.reload()
				}, 500)
			}}>
				Delete Account
			</mdui-button>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
				</button>
			</div>
		</div>
	);
}

export default App;
