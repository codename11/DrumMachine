import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
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
			pressedKey: null,
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
		this.myRef = React.createRef();//Makes ref for DrumMachine.
		this.mySwitch = React.createRef();//Ref for on/off switch.
		
		//Refs of audio elements.
		this.Q = React.createRef();
		this.W = React.createRef();
		this.E = React.createRef();
		this.A = React.createRef();
		this.S = React.createRef();
		this.D = React.createRef();
		this.Z = React.createRef();
		this.X = React.createRef();
		this.C = React.createRef();
		
		//Refs of divs who are parents of audio.
		this.H1 = React.createRef();
		this.H2 = React.createRef();
		this.H3 = React.createRef();
		this.H41 = React.createRef();
		this.H6 = React.createRef();
		this.Dsc_Oh = React.createRef();
		this.Kick_n_Hat = React.createRef();
		this.RP4_KICK_1 = React.createRef();
		this.Cev_H2 = React.createRef();
		
		this.myRange = React.createRef();//Ref for volume bar.
		this.myVol = React.createRef();//Ref for volume text.
		
		//Object for gathering audio objects.
		this.sounds = {
			sound1: null,
			sound2: null,
			sound3: null,
			sound4: null,
			sound5: null,
			sound6: null,
			sound7: null,
			sound8: null,
			sound9: null
		};

		//Object for gathering parents of audio objects.
		this.parents = {
			parent1: null,
			parent2: null,
			parent3: null,
			parent4: null,
			parent5: null,
			parent6: null,
			parent7: null,
			parent8: null,
			parent9: null
		};

		//Object of audio tracks.
		this.tracks = {
			track1: ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
			track2: ["https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"],
		};
		
		//Object for possible toggling id's of divs that encompass audio's.
		this.Id = {
			id1: ["Heater-1", "Heater-2", "Heater-3", "Heater-4", "Clap", "Open-HH", "Kick n' Hat", "Kick", "Closed-HH"],
			id2: ["Chord-1", "Chord-2", "Chord-3", "Shaker", "Open-HH", "Closed-HH", "Punchy-Kick", "Side-Stick", "Snare"],
		};
		
		this.Volume="";
		
	}
	
	componentDidMount() {
		//Set event listeners for keypress
		window.addEventListener("keydown", this.keyPress);

		this.Volume = ReactDOM.findDOMNode(this.myVol.current);
		
		//Gather all audio objects through their respective refs.
		this.sounds = {
			sound1: ReactDOM.findDOMNode(this.Q.current),
			sound2: ReactDOM.findDOMNode(this.W.current),
			sound3: ReactDOM.findDOMNode(this.E.current),
			sound4: ReactDOM.findDOMNode(this.A.current),
			sound5: ReactDOM.findDOMNode(this.S.current),
			sound6: ReactDOM.findDOMNode(this.D.current),
			sound7: ReactDOM.findDOMNode(this.Z.current),
			sound8: ReactDOM.findDOMNode(this.X.current),
			sound9: ReactDOM.findDOMNode(this.C.current)
		};
		
		//Gather all audio objects parent div's through their respective refs.
		this.parents = {
			parent1: ReactDOM.findDOMNode(this.H1.current),
			parent2: ReactDOM.findDOMNode(this.H2.current),
			parent3: ReactDOM.findDOMNode(this.H3.current),
			parent4: ReactDOM.findDOMNode(this.H41.current),
			parent5: ReactDOM.findDOMNode(this.H6.current),
			parent6: ReactDOM.findDOMNode(this.Dsc_Oh.current),
			parent7: ReactDOM.findDOMNode(this.Kick_n_Hat.current),
			parent8: ReactDOM.findDOMNode(this.RP4_KICK_1.current),
			parent9: ReactDOM.findDOMNode(this.Cev_H2.current)
		};
	}

	
	
	componentWillUnmount() {
		//Unmount all ref's.
		window.removeEventListener("keydown", this.keyPress);
		
		this.Volume = ReactDOM.findDOMNode(this.myVol.current);
	
		//Unmount all ref's.
		this.sounds = {
			sound1: ReactDOM.findDOMNode(this.Q.current),
			sound2: ReactDOM.findDOMNode(this.W.current),
			sound3: ReactDOM.findDOMNode(this.E.current),
			sound4: ReactDOM.findDOMNode(this.A.current),
			sound5: ReactDOM.findDOMNode(this.S.current),
			sound6: ReactDOM.findDOMNode(this.D.current),
			sound7: ReactDOM.findDOMNode(this.Z.current),
			sound8: ReactDOM.findDOMNode(this.X.current),
			sound9: ReactDOM.findDOMNode(this.C.current)
		};
		
		//Unmount all ref's.
		this.parents = {
			parent1: ReactDOM.findDOMNode(this.H1.current).id,
			parent2: ReactDOM.findDOMNode(this.H2.current).id,
			parent3: ReactDOM.findDOMNode(this.H3.current).id,
			parent4: ReactDOM.findDOMNode(this.H41.current).id,
			parent5: ReactDOM.findDOMNode(this.H6.current).id,
			parent6: ReactDOM.findDOMNode(this.Dsc_Oh.current).id,
			parent7: ReactDOM.findDOMNode(this.Kick_n_Hat.current).id,
			parent8: ReactDOM.findDOMNode(this.RP4_KICK_1.current).id,
			parent9: ReactDOM.findDOMNode(this.Cev_H2.current).id
		};
	}
	
	keyPress(event){
		
		let myKey = event.key;//Get pressed key.
		let displayId;//An text that should be rendered in element with id="display".
		
		switch (myKey.toUpperCase()) {//If content of myKey uupercased is like: 
			case this.Q.current.id: //id of audio element with ref=Q
				this.sounds.sound1.volume = this.state.volume; //then set volume in sounds.sound1 object with value from this.state.volume.
				this.sounds.sound1.play(); //play sound in sounds.sound1 object.
				
				if(this.state.volume===0){//If volume of sounds.sound1 object is 0(zero) then set variable displayId to null.
					displayId = null;
				}
				else{
					displayId = this.parents.parent1.id; //Else set displayId variable with value from id in parents.parent1 object. And so on ...
				}
				
				break;
			case this.W.current.id:
				this.sounds.sound2.volume = this.state.volume;
				this.sounds.sound2.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent2.id;
				}
				
				break;
			case this.E.current.id:
				this.sounds.sound3.volume = this.state.volume;
				this.sounds.sound3.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent3.id;
				}
				
				break;
			case this.A.current.id:
				this.sounds.sound4.volume = this.state.volume;
				this.sounds.sound4.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent4.id;
				}
				
				break;
			case this.S.current.id:
				this.sounds.sound5.volume = this.state.volume;
				this.sounds.sound5.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent5.id;
				}
				
				break;
			case this.D.current.id:
				this.sounds.sound6.volume = this.state.volume;
				this.sounds.sound6.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent6.id;
				}
				
				break;
			case this.Z.current.id:
				this.sounds.sound7.volume = this.state.volume;
				this.sounds.sound7.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent7.id;
				}
				
				break;
			case this.X.current.id:
				this.sounds.sound8.volume = this.state.volume;
				this.sounds.sound8.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent8.id;
				}
				
				break;
			case this.C.current.id:
				this.sounds.sound9.volume = this.state.volume;
				this.sounds.sound9.play();
				
				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent9.id;
				}
				
				break;
			default:
				
		}
		
		//Set state display with value from displayId.
		this.setState({
			display: displayId,
		});
		
	}

	handleClick(e){
		
		let displayId;
		
		switch (e.target.id) {//If id of clicked button with mouse is like:
			case this.H1.current.id: //you clicked on element,outer div of audio element with ref=H1
				this.sounds.sound1.volume = this.state.volume;//then set volume in sounds.sound1 object with value from this.state.volume.
				
				this.sounds.sound1.play(); //play sound in sounds.sound1 object.
				
				if(this.state.volume===0){//If volume of sounds.sound1 object is 0(zero) then set variable displayId to null.
					displayId = null;
				}
				else{
					displayId = this.parents.parent1.id; //Else set displayId variable with value from id in parents.parent1 object. And so on ...
				}
				
				break;
			case this.H2.current.id:
				this.sounds.sound2.volume = this.state.volume;
				this.sounds.sound2.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent2.id;
				}
				
				break;
			case this.H3.current.id:
				this.sounds.sound3.volume = this.state.volume;
				this.sounds.sound3.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent3.id;
				}
				
				break;
			case this.H41.current.id:
				this.sounds.sound4.volume = this.state.volume;
				this.sounds.sound4.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent4.id;
				}
				
				break;
			case this.H6.current.id:
				this.sounds.sound5.volume = this.state.volume;
				this.sounds.sound5.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent5.id;
				}
				
				break;
			case this.Dsc_Oh.current.id:
				this.sounds.sound6.volume = this.state.volume;
				this.sounds.sound6.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent6.id;
				}
				
				break;
			case this.Kick_n_Hat.current.id:
				this.sounds.sound7.volume = this.state.volume;
				this.sounds.sound7.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent7.id;
				}
				
				break;
			case this.RP4_KICK_1.current.id:
				this.sounds.sound8.volume = this.state.volume;
				this.sounds.sound8.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent8.id;
				}
				
				break;
			case this.Cev_H2.current.id:
				this.sounds.sound9.volume = this.state.volume;
				this.sounds.sound9.play();

				if(this.state.volume===0){
					displayId = null;
				}
				else{
					displayId = this.parents.parent9.id;
				}
				
				break;
			default:
				
		}
		
		//Set state display with value from displayId.
		this.setState({
			display: displayId,
		});
		
	}

	//Sets up volume.
	handleVolume(e){
		
		
		
		if(this.state.mySwitch){
			this.setState({
				volume: e.target.value/100, //Get value of range bar and divides it by 100 and set state volume with said value. Later is used for volume of playing sounds.
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

		const fancyId = this.state.fancy ? this.Id.id2.map(item2 => item2) : this.Id.id1.map(item1 => item1);//If checkbox i.e toggle button for alternating between audio sets, is true, then map object containing alternative id's, if it's not, then from other object containing id's. 
		const track = this.state.fancy ? this.tracks.track2 : this.tracks.track1;//If checkbox i.e toggle button for alternating between audio sets, is true, then map object containing alternative tracks, if it's not, then from other object containing tracks. 
	
		const displayId = this.state.display ? this.state.display.replace("-"," ") : "No sound";//If state display has 'truthy' value, then take value from said state and at the same time replace al dashes with empty char and set value to this variable. Then use this variable as value for content of an element with id="display".  
		const switchText = this.state.mySwitch ? "On" : "Off";//Checks state mySwitch, if it's 'truthy', then set text in on/off switch certain way, if it's not then other way. 
		
		//Changes class for volume text depending of value of range input.
		const volumer = this.state.sliderVal<=33 ? "vol1" :(this.state.sliderVal>33 && this.state.sliderVal<=66 ? "vol2": "vol3");
		
		//An array of all refs for outer divs.
		const divRefs = [this.H1, this.H2, this.H3, this.H41, this.H6, this.Dsc_Oh, this.Kick_n_Hat, this.RP4_KICK_1, this.Cev_H2];
		//An array of all refs of audio elements.
		const audioRefs = [this.Q, this.W, this.E, this.A, this.S, this.D, this.Z, this.X, this.C];
		//An array of all Id's of audio elements.
		const audioIds = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
		
		//Mapping of all audio's encompassed by div elements.
		const myKeys = fancyId.map((item,i) => <OuterDiv key={i.toString()} myid={fancyId[i]} myref={divRefs[i]} klasa="drum-pad metal linear" onClick={this.handleClick} letter={audioIds[i]} audio={<AudioTag myid={audioIds[i]} myref={audioRefs[i]} klasa="clip" source={track[i]} warning="Your browser doesn't support this audio format."/>} /> );
		
		return(
			
			<div id="drum-machine" className="grid-container cent" ref={this.myRef}>
				
				<Display id="display" klasa="item1" displayText={displayId}/>
				
				{myKeys}
				
				<Switch1 klasa="item3" mySwitchid="switch" myTypeBox="checkbox" myChange={this.fancyToggle} myWrapperKlasa="wrap" myLabhtmlFor="switch" myLabKlasa="lbx" mySpanKlasa="rib"/>
				
				<Switch2 klasa="item2" mySwitchid="myRange" myType="range" myMin="1" myMax="100" myRangeVal={this.state.sliderVal} rangeKlasa="slider" myRangeRef={this.myRange} myChange={this.handleVolume} volumeTextKlasa={volumer} myVolRef={this.myVol} volumeText={"Volume "+this.state.sliderVal}/>
				
				<KillSwitch klasa="mt1 metal linear oval" killRef={this.mySwitch} killClick={this.onOff} killSwitchText={switchText} />
				
			</div>

		);
		
	}
	
}

ReactDOM.render(<DrumMachine/>, document.getElementById('root'));