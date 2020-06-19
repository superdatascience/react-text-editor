# React text editor &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
<!-- TODO: Add package info when deployed -->
A small, simple and customizable text editor for use in React applications.


## Table of contents

- [Installation](#installation)
- [Props](#props)
- [Using it](#using-it)

## Installation

```shell
	npm install react-text-editor
```

# Props

| Prop                     |               Type                | Default value                        | Description                                                                                                                             |
| ------------------------ | :-------------------------------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| field                    |              string               | undefined                            | Value that would be used as the `target.name` of the created event                                                                      |
| html                     |              string               | undefined                            | The value that would appear in the editor, could be a variable                                                                          |
| enableEditor             |              boolean              | true                                 | If enabled the component will show the toolbar                                                                                          |


## Using it

You can import the editor like this:

```js
import TextEditor from "react-text-editor";
```

Then you can use the component anywhere in your React app like so:

```jsx
<TextEditor field="description" html={description} saveCallback={handleChange} placeholder="e.g. This is my editor..." enableEditor={true} />
```

## License

Add link to license file here.