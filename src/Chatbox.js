import React from 'react';
import firebase from '../../firebase';

class Chatbox extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}


	render() {
		return (
			<div>
				<ul>
					{ this.props.data.map(chat => {
						return (
							<li key={chat.id}>
								<strong>{chat.user}:</strong>
								{chat.message}
							</li>
						);
					}) }
				</ul>
			</div>
		);
	}
}

export default Chatbox;