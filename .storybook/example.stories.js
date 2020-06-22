import React, { useState, Fragment } from 'react';
import Editor from '../src/index';

export default { title: 'ExampleComponent' };

export const Example = () => {
	const [values, setValues] = useState({ text: '<p>This is our rich text editor and here we will display different options and functionalities</p><p>There are some elements like bold, italic, underline, strikethrough</p>' });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}

	return (
		<Fragment>
			<Editor
				field="text"
				html={values.text}
				saveCallback={handleChange}
				placeholder="Temporal placeholder..."
			/>
			<button onClick={() => console.log(values.text)}>Preview Text</button>
		</Fragment>
	);
}