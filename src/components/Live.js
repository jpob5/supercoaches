import React from 'react';
import draw from './Draw';

class Live extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentWeek: 11
        }

        this.changeWeek = this.changeWeek.bind(this);
        this.prevWeek = this.prevWeek.bind(this);
        this.nextWeek = this.nextWeek.bind(this);
    }

    prevWeek() {
        this.setState({ currentWeek: (this.state.currentWeek - 1) });
    }
    nextWeek() {
        this.setState({ currentWeek: (this.state.currentWeek + 1) });
    }

    changeWeek(event) {
        this.setState({ currentWeek: (event.target.value - 1) });
    }

    getTeamScore(value) {
        return <>
            <span>{value[0]}</span><span>{value[1]}</span>
        </>;
    }

    renderDraw() {
        let drawText = [];
        draw[this.state.currentWeek].map((value2, index2) => {
            let team1Text, team2Text;
            if (value2[0][1] > value2[1][1]) {
                team1Text = <span className="winner">{this.getTeamScore(value2[0])}</span>;
                team2Text = <span>{this.getTeamScore(value2[1])}</span>;
            } else if (value2[0][1] < value2[1][1]) {
                team1Text = <span>{this.getTeamScore(value2[0])}</span>;
                team2Text = <span className="winner">{this.getTeamScore(value2[1])}</span>;
            } else {
                team1Text = <span>{this.getTeamScore(value2[0])}</span>;
                team2Text = <span>{this.getTeamScore(value2[1])}</span>;
            }
            drawText.push(<tr key={index2}><td>{team1Text}</td><td>vs</td><td>{team2Text}</td></tr>);
            return false;
        });
        return (
            <>
                {/* <h2>Round {(this.state.currentWeek + 4)}</h2> */}
                <table>
                    <tbody>
                        {drawText}
                    </tbody>
                </table>
            </>
        );
    }

    render() {
        return (
            <>
                <div className="draw">
                <div className="week-updater">
                        {
                            this.state.currentWeek > 0 ? <button onClick={this.prevWeek}> {' < '} </button> : <button className="deactive"> {' < '} </button>
                        }
                        <select id="week" name="week" onChange={this.changeWeek} value={this.state.currentWeek + 1}>
                            <option value="1">Round 4</option>
                            <option value="2">Round 5</option>
                            <option value="3">Round 6</option>
                            <option value="4">Round 7</option>
                            <option value="5">Round 8</option>
                            <option value="6">Round 9</option>
                            <option value="7">Round 10</option>
                            <option value="8">Round 11</option>
                            <option value="9">Round 12</option>
                            <option value="10">Round 13</option>
                            <option value="11">Round 14</option>
                            <option value="12">Round 15</option>
                            <option value="13">Round 16</option>
                            <option value="14">Round 17</option>
                        </select>
                        {
                            this.state.currentWeek < 13 ? <button onClick={this.nextWeek}> {' > '} </button> : <button className="deactive"> {' > '} </button>
                        }
                    </div>
                    {this.renderDraw()}
                </div>
            </>
        );
    }
}

export default Live;