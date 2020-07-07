import React, { useState, useRef } from "react";
import ActionButton from "./button.js";
import { BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon, IconOrderedList, IconUnorderedList, IconJustifyLeft, IconJustifyCenter, IconJustifyRight, IconQuote, IconLink, IconImage, IconEdit, IconCode } from "./icons.js";
import "./styles.css";

const Editor = ({ field, html, saveCallback, placeholder }) => {
	const [htmlEditor, setHtmlEditor] = useState(false);
	const editorRef = useRef();

	const generateLink = (url) => {
		const pattern = /^((http|https|ftp):\/\/)/;
		return !pattern.test(url) ? `https://${url}` : url;
	};

	const handlePaste = (event) => {
		event.preventDefault();
		const text = event.clipboardData.getData("text/plain");
		document.execCommand("insertHTML", false, text);
	};

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
	};

	return (
		<div className="editable-wrapper">
			<div className="editable-actions">
				<ActionButton cmd="bold" icon={BoldIcon} />
				<ActionButton cmd="italic" icon={ItalicIcon} />
				<ActionButton cmd="underline" icon={UnderlineIcon} />
				<ActionButton cmd="strikeThrough" icon={StrikethroughIcon} />

				<ActionButton cmd="insertOrderedList" icon={IconOrderedList} />
				<ActionButton cmd="insertUnorderedList" icon={IconUnorderedList} />

				<ActionButton cmd="justifyLeft" icon={IconJustifyLeft} />
				<ActionButton cmd="justifyCenter" icon={IconJustifyCenter} />
				<ActionButton cmd="justifyRight" icon={IconJustifyRight} />

				<ActionButton cmd="formatBlock" icon={IconQuote} arg="blockquote" />

				<ActionButton icon={IconLink} func={() => {
					const linkUrl = prompt("Enter the URL");
					const selection = document.getSelection();
					document.execCommand("createLink", false, generateLink(linkUrl));
					selection.anchorNode.parentElement.target = "_blank";
					selection.anchorNode.parentElement.rel = "noopener";
				}} />

				<ActionButton icon={IconImage} func={() => {
					const imageUrl = prompt("Paste image url here");
					document.execCommand("insertHTML", false, `<img src="${imageUrl}">`);
				}} />

				<span onClick={() => setHtmlEditor(!htmlEditor)}>
					{htmlEditor ? <IconEdit/> : <IconCode/>}
				</span>
			</div>
			<hr/>

			{htmlEditor ? (
				<textarea
					className="editable-source"
					defaultValue={html}
					placeholder="Write your html code here"
					onBlur={handleSave}
				/>
			) : (
				<div
					ref={editorRef}
					className="editable-editor"
					dangerouslySetInnerHTML={{ __html: html }}
					contentEditable={true}
					placeholder={placeholder ? placeholder : "Write your rich text here"}
					onBlur={handleSave}
					onPaste={handlePaste}
				/>
			)}
		</div>
	);
};

export default Editor;
