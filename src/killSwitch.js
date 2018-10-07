import React from 'react';

class KillSwitch extends React.Component{

    render(){ 
		return (
			<div style={this.props.myStyle} className={this.props.klasa} onClick={this.props.killClick}>{this.props.killSwitchText}</div>
		);  
	}
}

export default KillSwitch;