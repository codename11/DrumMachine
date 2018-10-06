import React from 'react';

class Switch2 extends React.Component{

    render(){ 
		return (
			<div className={this.props.klasa}>
				<input id={this.props.mySwitchid} type={this.props.myType} min={this.props.myMin} max={this.props.myMax} value={this.props.myRangeVal} className={this.props.rangeKlasa} ref={this.props.myRangeRef} onChange={this.props.myChange}/>
				<div className={this.props.volumeTextKlasa} ref={this.props.myVolRef}>{this.props.volumeText}</div>
			</div>
		);  
	}
}

export default Switch2;