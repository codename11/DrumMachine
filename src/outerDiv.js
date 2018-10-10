import React from 'react';
import "./style.scss";

class OuterDiv extends React.Component{

	constructor(props){
		super(props);
		this.clicker = this.clicker.bind(this);
		this.presser = this.presser.bind(this);
		this.setStaterActive = this.setStaterActive.bind(this);
		
		this.state = {
			klasa: "drum-pad metal linear",
		};
	}
	
	componentDidMount() {
		//Set event listeners for keypress
		window.addEventListener("keyup", this.presser);
		
	}

	componentWillUnmount() {
		//Unmount all ref's.
		window.removeEventListener("keyup", this.presser);
		
	}

	setStaterActive(){//Function that set state who is used as class variable to outer div.
		
		//Sets different class when switch is on and different when switch is off.
		if(this.props.mySwitch){//If switch is on, set this classes.
			this.setState({
				klasa: "drum-pad metal linear btnActive",
			});
		
			setTimeout(() => { 

				this.setState({
					klasa: "drum-pad metal linear",
				});

			}, 150);
		}
		else{//If switch is off, set this classes. Difference between previous and this one is that is setting different class when switch is off.
			this.setState({
				klasa: "drum-pad metal linear btnsOff",
			});
		
			setTimeout(() => { 

				this.setState({
					klasa: "drum-pad metal linear",
				});

			}, 150);
		}
		
	}
	
	presser(event){
		
		//Check if it's DrumMachine is turned off. If it's not i.e 'on' then clicked button lights up. If it is, then it will not light up.
		//If this.props.myid line up with this.props.pads.id1 or this.props.pads.id2 and this.props.pads.reff line up with event.key uppercased, call 'setStaterActive'.

		for(let i=0;i<this.props.pads.reff.length;i++){
			
			if((this.props.pads.id1[i]===this.props.myid || this.props.pads.id2[i]===this.props.myid) && this.props.pads.reff[i]===event.key.toUpperCase()){
				
				this.setStaterActive();
			}
			
		}

	}
	
	clicker(){
		
		//Check if it's DrumMachine is turned off. If it's not i.e 'on' then clicked button lights up. If it is, then it will not light up.	
		this.setStaterActive();
		
	}
	
    render(){ 
	
		return (
			<button className={this.state.klasa} id={this.props.myid} onClick={(e)=>{this.props.onClick(e); this.clicker()}}>
				{this.props.letter}
				{this.props.audio}
			</button>
		);  
	}
}

export default OuterDiv;