import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import BookMark from './components/Bookmark';
import CreateForm from './components/CreateForm';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bookmarks: [],
		};
	}

	fetchdata = async () => {
		try {
			const response = await axios.get('/bookmarks');
			// console.log(response);
			this.setState({
				bookmarks: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
	componentDidMount = () => {
		this.fetchdata();
	};

	render() {
		return (
			<>
				<h1>Bookmark'd</h1>
				<CreateForm fetchdata={this.fetchdata} />
				{this.state.bookmarks.map((bookmark, index) => {
					return (
						<BookMark
							bookmark={bookmark}
							key={bookmark._id}
							fetchdata={this.fetchdata}
						/>
					);
				})}
			</>
		);
	}
}