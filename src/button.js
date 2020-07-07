import React from "react";

const ActionButton = ({ icon: RenderIcon, cmd, arg, func }) => {
	const handleClick = (event) => {
		event.preventDefault();
		func ? func() : document.execCommand(cmd, false, arg);
	};

	return <span onMouseDown={handleClick}><RenderIcon /></span>;
};

export default ActionButton;
