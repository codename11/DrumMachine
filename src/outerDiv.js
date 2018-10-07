import React from 'react';

class OuterDiv extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa} id={this.props.myid} onClick={this.props.onClick}>
				{this.props.letter}
				{this.props.audio}
			</div>
		);  
	}
}

export default OuterDiv;