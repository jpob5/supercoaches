import React from 'react';
import './styles/styles.scss';
import Live from './components/Live';
import Ladder from './components/Ladder';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
            activePage: 1
		}
		this.goToLadder = this.goToLadder.bind(this);
		this.goToDraw = this.goToDraw.bind(this);
    }

	goToLadder() {
		this.setState({activePage: 1});
	}
	goToDraw() {
		this.setState({activePage: 2});
	}
	render() {
		return (
			<div className="App">
				<h1>Super Coaches</h1>
				<div className="buttons">
					<button className={this.state.activePage === 1 && 'active-page'} onClick={this.goToLadder}>Ladder</button>
					<button className={this.state.activePage === 2 && 'active-page'} onClick={this.goToDraw}>Draw</button>
				</div>
				<div className="box">
					{this.state.activePage === 1 && <Ladder />}
					{this.state.activePage === 2 && <Live />}
				</div>
			</div>
		);
	}
}

export default App;
