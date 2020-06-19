import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

const ExampleComponent = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Currently, the count is: {count}</p>
			<button onClick={() => setCount(count - 1)}>Subtract</button>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={action('clicked')}>I'm an action button</button>
		</div>
	);
}

export default ExampleComponent;