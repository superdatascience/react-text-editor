import * as React from 'react'

interface EditorProps {
	readonly field: string,
	readonly html: string,
	readonly saveCallback: (event: React.ChangeEvent<HTMLInputElement>) => void,
	readonly placeholder: string
}

type EditorInterface = React.ComponentClass<EditorProps>

declare const Editor: EditorInterface;
