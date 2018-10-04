import React from 'react';
import SourceTag from './source.js';

class AudioTag extends React.Component{

    render(){ 
		return (
			<audio className="clip" id={this.prop.id}>
				<SourceTag src={this.prop.src} type={this.prop.type}/>
			</audio>
		);  
	}
}

export default AudioTag;