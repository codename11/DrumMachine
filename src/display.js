import React from 'react';

class Display extends React.Component{

    render(){ 
		return (
			<div id={this.props.id} className={this.props.klasa}>
				{this.props.displayText}
			</div>
		);  
	}
}

export default Display;