import React from 'react';
import draw from './Draw';
import $ from 'jquery';
import { teams } from './Record';
import { sortLadder, sortSimulation } from './Sorts';

class Live extends React.Component {

    constructor(props) {
        super(props);

        this.record = $.extend(true, {}, teams);

        this.recordAsArray = [];

        this.renderLadder = this.renderLadder.bind(this);
    }

    renderLadder() {
        let recordAsArray = Object.entries(this.record);
        let ladderText = [];
        draw.map((value, index) => {
            value.map((value2, index2) => {
                recordAsArray.map((value3, index3) => {
                    if (value2[0][0] === value3[1].name) {
                        if (value2[0][1] > 0) {
                            recordAsArray[index3][1].pointsFor += value2[0][1];
                            recordAsArray[index3][1].pointsAgainst += value2[1][1];
                            if (value2[0][1] > value2[1][1]) {
                                recordAsArray[index3][1].points += 2;
                            } else if (value2[0][1] === value2[1][1]) {
                                recordAsArray[index3][1].points += 1;
                            }
                        }
                    } else if (value2[1][0] === value3[1].name) {
                        if (value2[1][1] > 0) {
                            recordAsArray[index3][1].pointsFor += value2[1][1];
                            recordAsArray[index3][1].pointsAgainst += value2[0][1];
                            if (value2[1][1] > value2[0][1]) {
                                recordAsArray[index3][1].points += 2;
                            } else if (value2[1][1] === value2[0][1]) {
                                recordAsArray[index3][1].points += 1;
                            }
                        }
                    }
                    return false;
                });
                return false;
            });
            return false;
        });
        recordAsArray.sort(sortLadder);
        recordAsArray.map((value, index) => {
            ladderText.push(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value[1].name}</td>
                    <td>{value[1].points}</td>
                    <td>{value[1].pointsFor - value[1].pointsAgainst}</td>
                    <td>{value[1].pointsFor}</td>
                    <td>{value[1].pointsAgainst}</td>
                </tr>
            );
            return false;
        });
        return ladderText;
    }

    render() {
        return (
            <>
                <div className="ladder">
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Team</th>
                                <th>Points</th>
                                <th>+/-</th>
                                <th>For</th>
                                <th>Against</th>
                            </tr>
                            {this.renderLadder()}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Live;