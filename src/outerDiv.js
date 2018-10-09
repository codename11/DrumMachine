import React from 'react';
import "./style.scss";

class OuterDiv extends React.Component{

	constructor(props){
		super(props);
		this.clicker = this.clicker.bind(this);
		this.presser = this.presser.bind(this);
		this.setStater = this.setStater.bind(this);
		
		this.state = {
			klasa: "drum-pad metal linear"
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

	setStater(){
		this.setState({
				klasa: "drum-pad metal linear btnActive",
			});
	
		setTimeout(() => { 

			this.setState({
				klasa: "drum-pad metal linear",
			});

		}, 150);
	}
	
	presser(event){
		let str = this.props.mySwitch+event.key+this.props.myid;
		
		//Check if it's DrumMachine is turned off. If it's not i.e 'on' then clicked button lights up. If it is, then it will not light up.
		switch (str) {
			case "trueqHeater-1":
				
				this.setStater();
				break;
				
			case "truewHeater-2":
				
				this.setStater();
				break;	
			
			case "trueeHeater-3":
				
				this.setStater();
				break;
			
			case "trueaHeater-4_1":
				
				this.setStater();
				break;
				
			case "truesHeater-6":
				
				this.setStater();
				break;
				
			case "truedDsc_Oh":
				
				this.setStater();
				break;
				
			case "truezKick_n_Hat":
				
				this.setStater();
				break;
				
			case "truexRP4_KICK_1":
				
				this.setStater();
				break;
				
			case "truecCev_H2":
				
				this.setStater();
				break;
				
			default:
				break;
		}
		
	}
	
	clicker(){
		
		if(this.props.mySwitch){//Check if it's DrumMachine is turned off. If it's not i.e 'on' then clicked button lights up. If it is, then it will not light up.	
			
			this.setStater();
		}
		
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