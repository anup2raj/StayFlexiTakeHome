import React from 'react';
import './CreatePlayer.css';

class CreatePlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    list = {UploadPhoto: "", CurrentClub: "", Age: "", DebutYear: "", PreviousClub: "", Goals: "", Assists: "", Position: "", FreekickScored: ""};
    playerslist = [];
    
    componentWillMount(){
        if(localStorage.getItem("playerslist")){
            this.playerslist = JSON.parse(localStorage.getItem("playerslist"));
            // alert(JSON.stringify(this.playerslist));
        }
    }
    updateList = (e) => {
        e.preventDefault();
        // const reader = new FileReader();
        // const name = document.querySelector("#UploadPhoto").files[0].name;
        // reader.addEventListener('load', function(){
        //     if(this.result){
        //         this.list.UploadPhoto = this.result;
        //     }
        // })
        // reader.readAsDataURL(document.querySelector('#UploadPhoto').files[0]);
        // // reader.readAsDataURL(this.files[0]);
        this.list.UploadPhoto = document.querySelector("#UploadPhoto").value;
        this.list.CurrentClub = document.querySelector("#CurrentClub").value;
        this.list.Age = document.querySelector("#Age").value;
        this.list.DebutYear = document.querySelector("#DebutYear").value;
        this.list.PreviousClub = document.querySelector("#PreviousClub").value;
        this.list.Goals = document.querySelector("#Goals").value;
        this.list.Assists = document.querySelector("#Assists").value;
        this.list.Position = document.querySelector("#Position").value;
        this.list.FreekickScored = document.querySelector("#FreekickScored").value;

        this.playerslist.push(this.list);
        localStorage.setItem("playerslist", JSON.stringify(this.playerslist));
        
    }

    render(){
        // if(localStorage.getItem("playerslist")){
        //     this.playerslist = JSON.parse(localStorage.getItem("playerslist"));
        //     alert(JSON.stringify(this.playerslist));
        // }
        return (
            <>
                
                <h1 className="my-4">Add New Player to List</h1>
                <form>
                    <div className="form-row">
                        <div className="form-group col-3">
                            <label htmlFor="UploadPhoto">Upload Photo</label>
                        </div>
                        <div className="form-group col">
                            <input type="file" className="form-control" id="UploadPhoto" placeholder="Upload Photo"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            {/* <label for="CurrentClub">Current Club</label> */}
                            <input type="text" className="form-control" id="CurrentClub" placeholder="Current Club"/>
                        </div>
                        <div className="form-group col">
                            {/* <label for="Age">Age</label> */}
                            <input type="text" className="form-control" id="Age" placeholder="Age"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            {/* <label for="DebutYear">Debut Year</label> */}
                            <input type="text" className="form-control" id="DebutYear" placeholder="Debut Year"/>
                        </div>
                        <div className="form-group col">
                            {/* <label for="PreviousClub">Previous Club</label> */}
                            <input type="text" className="form-control" id="PreviousClub" placeholder="Previous Club"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            {/* <label for="Goals">Goals</label> */}
                            <input type="text" className="form-control" id="Goals" placeholder="Goals"/>
                        </div>
                        <div className="form-group col">
                            {/* <label for="Assists">Assists</label> */}
                            <input type="text" className="form-control" id="Assists" placeholder="Assists"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            {/* <label for="Position">Position</label> */}
                            <input type="text" className="form-control" id="Position" placeholder="Position"/>
                        </div>
                        <div className="form-group col">
                            {/* <label for="FreekickScored">Freekick Scored</label> */}
                            <input type="text" className="form-control" id="FreekickScored" placeholder="Freekick Scored"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4" onClick={this.updateList}>Submit</button>
                </form>

            </>
        );
    }
}

export default CreatePlayer;
