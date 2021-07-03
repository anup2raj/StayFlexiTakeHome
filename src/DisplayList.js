import React from 'react';
import CreatePlayer from './CreatePlayer';
import * as ReactBootStrap from 'react-bootstrap';
import './DisplayList.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// list = {UploadPhoto: "", CurrentClub: "", Age: "", DebutYear: "", PreviousClub: "", Goals: "", Assists: "", Position: "", FreekickScored: ""};

let playerslist;
function DisplayList(){

    if(localStorage.getItem('playerslist')){
        playerslist = JSON.parse(localStorage.getItem("playerslist"));
    }
    const renderPlayer = (playerslist, index) => {
        return(
            <tr key={index}>
                <td>{playerslist.UploadPhoto}</td>
                <td>{playerslist.CurrentClub}</td>
                <td>{playerslist.Age}</td>
                <td>{playerslist.DebutYear}</td>
                <td>{playerslist.PreviousClub}</td>
                <td>{playerslist.Goals}</td>
                <td>{playerslist.Assists}</td>
                <td>{playerslist.Position}</td>
                <td>{playerslist.FreekickScored}</td>
            </tr>
        )
    }
    
    return (
        <div className="players">
            <h3 className="mb-3">List of Added Players</h3>
            <ReactBootStrap.Table>
                <thead>
                    {/* <tr> */}
                        <th>Player</th>
                        <th>Current Club</th>
                        <th>Age</th>
                        <th>Debut Year</th>
                        <th>Previous Club</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Position</th>
                        <th>FreekickScored</th>
                    {/* </tr> */}
                </thead>
                <tbody>
                    {playerslist.map(renderPlayer)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    );
}

export default DisplayList;