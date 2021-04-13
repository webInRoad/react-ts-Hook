import React, { useState } from 'react'
import Child from './child'
const MemoChild = React.memo(Child)
export default function Parent(props: any) {
	const [num, setNum] = useState(0)
	const [count] = useState(0)
	const handleClick = () => {
		setNum(num + 1)
	}
	return (
		<div>
			<button onClick={handleClick}>更改num</button>
			<MemoChild />
		</div>
	)
}
