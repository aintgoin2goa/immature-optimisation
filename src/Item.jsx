import React from 'react';
import ms from 'ms';

const states = {
	BEFORE: Symbol('BEFORE'),
	RUNNING: Symbol('RUNNING'),
	COMPLETE: Symbol('COMPLETE')
}

const BeforeState = ({onStartClick}) => {
	return <button className="button is-primary is-light is-pulled-left" onClick={onStartClick}>START</button>
}

const RunningState = ({progress}) => {
	return (
		<div>
			<span className="icon is-large"><i className="fas fa-spinner fa-pulse"></i></span>
			<span className="tag is-large is-info">{progress}</span>
		</div>
	)
}

const CompleteState = ({name, onCloseClick, progress}) => {
	const lastEntry = performance.getEntriesByName(name).slice(-1)[0];
	const elapsed = Math.round(lastEntry.duration);
	return (
		<div>
				<span className="tag is-primary is-large">{elapsed + 'ms'}</span>
				<span className="tag is-large is-info">{progress}</span>
				<a className="delete" onClick={onCloseClick}></a>
		</div>
	);
}

const CurrentState = ({name, onCloseClick, onStartClick, progress, state}) => {
	switch(state){
		case states.BEFORE: return <BeforeState onStartClick={onStartClick} />;
		case states.RUNNING: return <RunningState progress={progress} />;
		case states.COMPLETE: return <CompleteState name={name} onCloseClick={onCloseClick} progress={progress} />
	}
}

export default class Item extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			state: states.BEFORE,
			progress: 0,
			timeStart: 0,
			timeEnd: 0,
		}
		this.onStartClick = this.onStartClick.bind(this);
		this.onProgress = this.onProgress.bind(this);
		this.onEnd = this.onEnd.bind(this);
		this.onCloseClick = this.onCloseClick.bind(this);
		this.name = this.props.title.trim().toLowerCase().replace(/\s/g, '-');
	}

	onStartClick() {
		performance.mark(`${this.name}.start`);
		this.setState({
			state: states.RUNNING,
		});
		setTimeout(() => this.props.module.start(this.onProgress, this.onEnd), 0);
	}

	onProgress(progress) {
		this.setState({
			progress: progress,
		});
	}

	onEnd() {
		performance.mark(`${this.name}.end`);
		performance.measure(this.name, `${this.name}.start`, `${this.name}.end`);
		this.setState({
			state: states.COMPLETE,
		});
	}

	onCloseClick() {
		this.setState({
			timeStart: 0,
			timeEnd: 0,
			progress: 0,
			state: states.BEFORE,
		});
	}

	render() {
		const {title} = this.props;
		return (
			<div className="level">
				<div className="level-left">
					<p className="title">{title}</p>
				</div>
				<div className="level-item" style={{justifyContent: 'flex-start', paddingLeft: '20px'}}>
					<CurrentState name={this.name} {...this.state} onStartClick={this.onStartClick} onCloseClick={this.onCloseClick} />
				</div>
			</div>
		)
	}

}