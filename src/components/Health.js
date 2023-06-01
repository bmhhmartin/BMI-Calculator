import React, { Component } from 'react';
import fatman from "../images/fatman.jpg";
import normal from "../images/normal.jpg";
import thinner from "../images/more thinner.jpg";


export default class Health extends Component {
    constructor(){
        super();
        this.state={
            name: "",
            height: "",
            weight: ""
        }
    }
    
    

    nameHandle=(event)=>{
        var mainName = event.target.name;
        var nameValue = event.target.value;
        this.setState({
            [mainName]: nameValue
        })
    }
    heightHandle=(event)=>{
        var heightName = event.target.name;
        var heightValue = event.target.value;
        this.setState({
            [heightName]: heightValue * 2.54
        })
    }
    weightHandle=(event)=>{
        var weightName = event.target.name;
        var weightValue = event.target.value;
        this.setState({
            [weightName]: weightValue
        })
    }
    
    render() {
        
        
        var bmi = this.state.weight / this.state.height / this.state.height * 10000;
        var yourName = "'" + this.state.name + "'";
        if (bmi) {
            if(bmi > 24.9){
                document.getElementById("result").innerHTML =  yourName + " " +"You are Overweight";
                document.getElementById("bmi_alert").classList.add("bmi_alert");
                document.getElementById("result").style.color = "red";
                document.getElementById("bmi_image").src = fatman;
            }
            else if (bmi > 18.6 && bmi<= 24.9) {
                document.getElementById("result").innerHTML =  yourName + " " +"You are Normal";
                document.getElementById("bmi_alert").classList.add("bmi_alert");
                document.getElementById("result").style.color = "green";
                document.getElementById("bmi_image").src = normal;
            }
            else if (bmi < 18.6) {
                document.getElementById("result").innerHTML =  yourName + " " +"You are Underweight";
                document.getElementById("bmi_alert").classList.add("bmi_alert");
                document.getElementById("result").style.color = "blue";
                document.getElementById("bmi_image").src = thinner;
            }
        }
        
        return (
                <div className="container">
                    <form action="">
                        <div className="report">
                        <div className="input-group mb-3">
                                <span className="input-group-text">Name</span>
                                <input name="name" type="text" className="form-control" autoComplete='false' onChange={this.nameHandle} placeholder="Enter Your Name"></input>
                            </div>
                            <div className="input-group mb-3 inches">
                                <span className="input-group-text ">Height</span>
                                <input name="height" type="number" className="form-control inches" onChange={this.heightHandle} placeholder="Enter Your Height In Inch"></input>
                            </div>
                            <div className="input-group mb-3 weights">
                                <span className="input-group-text">Weight</span>
                                <input name="weight" type="number" className="form-control"  onChange={this.weightHandle} placeholder="Enter Your Height In Kg"></input>
                            </div>
                        </div>
                    </form>
                    <div className="result text-center">
                        <h5>Your Height: {((this.state.height / 2.54) * 0.084).toFixed(2)} Foot</h5>
                        <h5>Your Weight: {this.state.weight * 1} kg</h5>
                        <h6 id="bmi_alert">
                            <span id="result"></span>
                        </h6>
                        <div className="bmi_image" >
                            <img className="img-fluid" id="bmi_image"/>
                        </div>
                    </div>
                </div>
        )
    }
}
