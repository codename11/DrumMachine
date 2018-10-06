import React from 'react';

class KillSwitch extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa} ref={this.props.killRef} onClick={this.props.killClick}>{this.props.killSwitchText}</div>
		);  
	}
}

export default KillSwitch;