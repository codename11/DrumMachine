import React from 'react';

class SourceTag extends React.Component{

    render(){ 
		return (
			<source src={this.prop.src} type={this.prop.type}/>
		);  
	}
}

export default SourceTag;