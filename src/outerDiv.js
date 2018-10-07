import React from 'react';

class OuterDiv extends React.Component{

    render(){ 
		return (
			<button className={this.props.klasa} id={this.props.myid} onClick={this.props.onClick}>
				{this.props.letter}
				{this.props.audio}
			</button>
		);  
	}
}

export default OuterDiv;