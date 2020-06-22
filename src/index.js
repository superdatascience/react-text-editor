import React, { useState, useRef } from 'react';
import ActionButton from './button.js';
import { BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon, IconEdit, IconCode } from './icons.js';

const Editor = ({ field, html, saveCallback, placeholder }) => {
	const [htmlEditor, setHtmlEditor] = useState(false);
	const editorRef = useRef();

	const handleSave = (event) => {
		const initialHtml = html;
		const el = editorRef.current;
		const newHtml = el ? el.innerHTML : event.target.value;

		if (initialHtml !== newHtml) {
			const newEvent = Object.assign({}, event, {
				target: { name: field, value: newHtml }
			});
			saveCallback(newEvent);
		}
	}

	return (
		<div>
			<ActionButton cmd="bold" icon={BoldIcon} />
			<ActionButton cmd="italic" icon={ItalicIcon} />
			<ActionButton cmd="underline" icon={UnderlineIcon} />
			<ActionButton cmd="strikeThrough" icon={StrikethroughIcon} />

			<span onClick={() => setHtmlEditor(!htmlEditor)}>
				{htmlEditor ? <IconEdit/> : <IconCode/>}
			</span>
			<hr/>

			{htmlEditor ? (
				<textarea
					defaultValue={html}
					placeholder="Write your html code here"
					onBlur={handleSave}
				/>
			) : (
				<div
					ref={editorRef}
					dangerouslySetInnerHTML={{__html: html}}
					contentEditable={true}
					placeholder={placeholder ? placeholder : 'Write your rich text here'}
					onBlur={handleSave}
				/>
			)}
		</div>
	);
}

export default Editor;