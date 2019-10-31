

export const start = (onprogress, end) => {
	const worker = new Worker('worker.js');
	worker.onmessage = e => {
		const [event, data] = e.data;
		if(event === 'progress') {
			onprogress(data);
		}else if(event === 'end') {
			end();
		}
	}
}