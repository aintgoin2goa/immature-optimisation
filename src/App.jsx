import React from 'react';

import Item from './Item';
import * as vanilla from './vanilla';
import * as worker from './worker';
import * as wasm from './wasm';
import * as generator from './generator';

const Items = ({ items }) => 
	items.map((item, index) => {
		return <Item {...item} key={index} />
	})

const items = [
	{
		title: 'Vanilla Js',
		module: vanilla,
	},
	{
		title: 'Generators',
		module: generator,
	},
	{
		title: 'Worker',
		module: worker,
	},
	{
		title: 'WASM',
		module: wasm,
	}
]

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
							<section className="hero is-info is-bold">
			<div className="hero-body">
				<div className="container">
				<h1 className="title">
					Immature Optimisation
				</h1>
				</div>
			</div>
			</section>
			<section className="section">
				<input type="range" />
				<Items items={items} />
			</section>

			</React.Fragment>
		)
	}
}