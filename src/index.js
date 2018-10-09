import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Display from "./display.js";
import AudioTag from "./audio.js";
import OuterDiv from "./outerDiv.js";
import Switch1 from "./switch1.js";
import Switch2 from "./switch2.js";
import KillSwitch from "./killSwitch.js";

class DrumMachine  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: null,
			sliderVal: 50,
			volume: 0.5,
			mySwitch: true,
			prevVolume:  0.5,
			fancy: false,
		};
		this.handleClick = this.handleClick.bind(this);//Function that when you click button with mouse, plays sound.
		this.keyPress = this.keyPress.bind(this);//Function when you click on key,  plays sound.
		this.handleVolume = this.handleVolume.bind(this);//Volume up and down on range input.
		this.onOff = this.onOff.bind(this);//Turn sound off or on.
		this.fancyToggle = this.fancyToggle.bind(this);//It toggles between different sets of audio tracks.
		this.playAudio = this.playAudio.bind(this);//Function that play audio.
		
		//Only changing things is in an array this.pads.id1, id2 and reff.
		this.url = "https://s3.amazonaws.com/freecodecamp/drums/";
		this.mp3 = ".mp3";
		this.pads = {
			reff: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
			id1: ["Heater-1", "Heater-2", "Heater-3", "Heater-4_1", "Heater-6", "Dsc_Oh", "Kick_n_Hat", "RP4_KICK_1", "Cev_H2"],
			id2: ["Chord_1", "Chord_2", "Chord_3", "Give_us_a_light", "Dry_Ohh", "Bld_H1", "punchy_kick_1", "side_stick_1", "Brk_Snr"]
		};
		
		//An array of all refs of audio elements.
		this.audioRefs = [];
		this.sounds = [];
		for(let elem in this.pads.reff){
			
			this[elem] = React.createRef();
			this.audioRefs.push(this[elem]);
			
		}
		
	}
	
	componentDidMount() {
		//Set event listeners for keypress
		window.addEventListener("keyup", this.keyPress);
		
		//Gather all audio objects through their respective refs.		
		for(let elem in this.audioRefs){
			
			this.sounds.push(this[elem].current);
			//this.sounds.push(ReactDOM.findDOMNode(this[elem].current));
		}
		
	}

	componentWillUnmount() {
		//Unmount all ref's.
		window.removeEventListener("keyup", this.keyPress);
	
		//Unmount all ref's.
		this.sounds = [this.Q.current, this.W.current, this.E.current, this.A.current, this.S.current, this.D.current, this.Z.current, this.X.current, this.C.current];

	}
	
	playAudio(par1, par2, par3){//Par1 is index of an given element be that be audio or outer div. Par2 is this.state.volume and Par3 is element itself.
		
			//Assign par1 as index to know which element(by ref) should 'engage'.
			this.sounds[par1].volume = par2;//After element is 'engaged', set it's volume.
			this.sounds[par1].currentTime = 0;//Added this so you may for example, play sound 5 times subsequently.
			this.sounds[par1].play();//After element is 'engaged', set it's to play.
			
		return arguments;
	}
	
	keyPress(event){
		
		let myKey = event.key;//Get pressed key.
		let clikedId;
		
		//Depending if toggle track button is on or off, it assigns appropriate array of id's.
		if(this.state.fancy===false){
			clikedId = [...this.pads.id1]; 
		}
		else if(this.state.fancy===true){
				clikedId = [...this.pads.id2];
		}
		
		let index = this.pads.reff.indexOf(myKey.toUpperCase());//Gets an index by comparing myKey with content of an array with refs.
		
		//Calls function playAudio and gives it parameters. First is index of pressed key from array. Second is current volume, third is clikced element itself.
		let play = [...this.playAudio(index,this.state.volume,clikedId[index])];
		
		//Set state display with value from displayId.
		this.setState({
			display: play[2],//Second argument of playAudio is 'message' needed to show on display component.
		});
		
		if(!this.state.mySwitch){//Set default styling for bottom border when pressed/clicked.
			this.sounds[index].parentNode.classList.add("btnsOff");
			setTimeout(() => { this.sounds[index].parentNode.classList.remove("btnsOff"); }, 150);
		}
		
	}

	handleClick(e){
		
		let clikedId;
		
		//Depending if toggle track button is on or off, it assigns appropriate array of id's.
		if(this.state.fancy===false){
			clikedId = [...this.pads.id1];
		}
		else if(this.state.fancy===true){
				clikedId = [...this.pads.id2];
		}
		
		let index = clikedId.indexOf(e.target.id);//Gets an index by comparing myKey with content of an array with refs.
		
		//Calls function playAudio and gives it parameters. First is index of pressed key from array. Second is current volume, third is clikced element itself.
		let play = [...this.playAudio(index,this.state.volume,clikedId[index])];
		
		//Set state display with value from displayId.
		this.setState({
			display: play[2],
		});

		if(!this.state.mySwitch){//Set default styling for bottom border when pressed/clicked.
			this.sounds[index].parentNode.classList.add("btnsOff");
			setTimeout(() => { this.sounds[index].parentNode.classList.remove("btnsOff"); }, 150);
		}
		
	}

	//Sets up volume.
	handleVolume(e){
		
		if(this.state.mySwitch){
			this.setState({
				volume: e.target.value/100, //Get value of range bar and divides it by 100 and set state volume with said value. Later is used for volume of playing this.sounds.
				sliderVal: e.target.value, //Get value of range bar and set state sliderVal. 
				prevVolume: e.target.value/100, //Set as previous volume value, in case when you set switch of then on again, then it's needs this previous value for volume.
			});
		}
		else{
			this.setState({
				sliderVal: e.target.value, //Get value of range bar and set state sliderVal. 
				prevVolume: e.target.value/100, //Set as previous volume value, in case when you set switch of then on again, then it's needs this previous value for volume.
			});
		}
		
	}
	
	//Turns audio on/off.
	onOff(e){
		
		if(this.state.mySwitch){//If state mySwitch is 'truthy', then:
			this.setState({
				mySwitch: !this.state.mySwitch,//set state mySwitch with reverse value, it's a state of switch itself. It is used for regulating switch's position i.e. when is 'on' it's on left side, if it's of, then floats to right side.
				volume: 0, //sets volume to zero.
			});
			
		}
		else{
			this.setState({
				mySwitch: !this.state.mySwitch,//same as previous,
				volume: this.state.prevVolume,//If switch is false i.e. turned off, then set volume to level prior to turning it off.
				display: null
			});
			
		}
		
	}
	
	//Function for toggling between audio sets.
	fancyToggle(e){//If checkbox is checked, then one set, if it isn't, then other audio set.
		this.setState({
			fancy: e.target.checked//Set state with value of attribute checked of an checkbox. Said value if present is 'truthy, if it's not then is 'falsy'.
		});

	}
	
	render(){

		const fancyId = this.state.fancy ? this.pads.id2 : this.pads.id1;//If checkbox i.e toggle button for alternating between audio sets, is true, then map object containing alternative id's, if it's not, then from other object containing id's. 
		const track = this.state.fancy ? this.pads.id2.map((item, i) => this.url+item+this.mp3) : this.pads.id1.map((item, i) => this.url+item+this.mp3);//If checkbox i.e toggle button for alternating between audio sets, is true, then map object containing alternative tracks, if it's not, then from other object containing tracks. 
	
		const displayId = this.state.display && this.state.mySwitch ? this.state.display.replace(/-|_/g,' ')  : "No sound";//If state display has 'truthy' value, then take value from said state and at the same time replace al dashes with empty char and set value to this variable. Then use this variable as value for content of an element with id="display".  
		const switchText = this.state.mySwitch ? "On" : "Off";//Checks state mySwitch, if it's 'truthy', then set text in on/off switch certain way, if it's not then other way. 
		
		//Changes class for volume text depending of value of range input.
		const volumer = this.state.sliderVal<=33 ? "vol1" :(this.state.sliderVal>33 && this.state.sliderVal<=66 ? "vol2": "vol3");
		
		//Mapping of all audio's encompassed by div elements.
		const myKeys = this.pads.reff.map((item,i) => <OuterDiv mySwitch={this.state.mySwitch} key={("outerDiv"+i)} myid={fancyId[i]} onClick={this.handleClick} letter={this.pads.reff[i]} audio={<AudioTag key={("audio"+i)} myid={this.pads.reff[i]} myref={this.audioRefs[i]} klasa="clip" source={track[i]} warning="Your browser doesn't support this audio format."/>} /> );
		
		const killSwitchStyle = (switchText==="On") ? {color:"green"} : {color:"red"};//Sets killSwitch font color.
		const killClass = this.state.mySwitch ? "mt1 metal linear oval btnOn" : "mt1 metal linear oval btnOff";//Sets killSwitch background color.

		return(
			
			<div id="drum-machine" className="grid-container cent">
				
				<Display id="display" klasa="item1" displayText={displayId}/>
				
				{myKeys}
				
				<Switch1 klasa="item3" mySwitchid="switch" myTypeBox="checkbox" myChange={this.fancyToggle} myWrapperKlasa="wrap" myLabhtmlFor="switch" myLabKlasa="lbx" mySpanKlasa="rib"/>
				
				<Switch2 klasa="item2" mySwitchid="myRange" myType="range" myMin="1" myMax="100" myRangeVal={this.state.sliderVal} rangeKlasa="slider" myChange={this.handleVolume} volumeTextKlasa={volumer} volumeText={"Volume "+this.state.sliderVal}/>
				
				<KillSwitch myStyle={killSwitchStyle} klasa={killClass} killClick={this.onOff} killSwitchText={switchText} />
				
			</div>

		);
		
	}
	
}

ReactDOM.render(<DrumMachine/>, document.getElementById('root'));