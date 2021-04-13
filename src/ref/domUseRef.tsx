import React, { MutableRefObject, useRef } from 'react'
const TextInputWithFocusButton: React.FC = () => {
	const inputEl: MutableRefObject<any> = useRef(null)
	const handleFocus = () => {
		// `current` 指向已挂载到 DOM 上的文本输入元素
		inputEl.current.focus()
	}
	return (
		<p>
			<input ref={inputEl} type="text" />
			<button onClick={handleFocus}>Focus the input</button>
		</p>
	)
}
export default TextInputWithFocusButton
