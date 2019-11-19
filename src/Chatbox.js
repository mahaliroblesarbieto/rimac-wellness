import React from 'react';
import firebase from './firebase';

class Chatbox extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}


	render() {
		return (
			<div className="padding-comments">
				
					{ this.props.data.map(chat => {
						return (
							<div className="one-comment" key={chat.id}>
								<strong>{chat.user}: </strong>
								{chat.message}
							</div>
						);
					}) }
			
			</div>
		);
	}
}

export default Chatbox;