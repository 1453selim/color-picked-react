import React from 'react';

class Button extends React.Component {

	render() {
		return (
			<button 
				className={ this.props.light ? 'light-button' : 'dark-button' }  
				onClick={this.props.chooseColor}>Refresh
				{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;