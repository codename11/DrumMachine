import React from 'react';
import AudioTag from './source.js';

class DrumPad extends React.Component{

    render(){ 
		return (
			<div className="drum-pad">
				<AudioTag id={this.prop.id} />
			</div>
		);  
	}
}

export default DrumPad;