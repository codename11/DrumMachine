import React from 'react';

class AudioTag extends React.Component{

    render(){ 
		return (
			<audio ref={this.props.myref} className={this.props.klasa} id={this.props.myid} src={this.props.source}>
				{this.props.warning}
			</audio>
		);  
	}
}

export default AudioTag;