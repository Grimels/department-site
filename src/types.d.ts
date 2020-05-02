declare module 'suneditor-react/misc/buttonList' {
	const basic: Array[string[]];
	const complex: Array[string[]];
	const formatting: Array[string[]];
	export default { basic, complex, formatting };
}

declare module '*.svg' {
	const content: string;
	export default content;
}
