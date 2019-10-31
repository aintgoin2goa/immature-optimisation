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

const RunningState = () => {
	return <span className="icon is-large"><i className="fas fa-spinner fa-pulse"></i></span>
}

const CompleteState = ({timeStart, timeEnd, onCloseClick}) => {
	const elapsed = Math.round((timeEnd - timeStart));
	return (
		<div>
				<span className="tag is-primary is-large">{elapsed + 'ms'}</span>
				<a className="delete" onClick={onCloseClick}></a>
		</div>
	);
}

const CurrentState = props => {
	switch(props.state){
		case states.BEFORE: return <BeforeState onStartClick={props.onStartClick} />;
		case states.RUNNING: return <RunningState progress={props.progress} />;
		case states.COMPLETE: return <CompleteState timeStart={props.timeStart} timeEnd={props.timeEnd} onCloseClick={props.onCloseClick} />
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
	}

	onStartClick() {
		this.setState({
			state: states.RUNNING,
			timeStart: performance.now()
		});
		setTimeout(() => this.props.module.start(this.onProgress, this.onEnd), 0);
	}

	onProgress(progress) {
		this.setState({
			progress: Math.round(progress * 100),
		});
	}

	onEnd() {
		this.setState({
			state: states.COMPLETE,
			timeEnd: performance.now(),
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
					<CurrentState {...this.state} onStartClick={this.onStartClick} onCloseClick={this.onCloseClick} />
				</div>
			</div>
		)
	}

}