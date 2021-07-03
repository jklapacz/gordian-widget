import Gordian from './gordian.svelte';

const app = new Gordian({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;