import React, { useState,useMemo } from 'react'
import Child from './child'
const MemoChild = React.memo(Child)
export default function Parent(props: any) {
	const [num, setNum] = useState<number>(0)
	const handleClick = () => {
		setNum(num + 1)
	}
	return (
		<div>
			<h2>{num}</h2>
			<button onClick={handleClick}>更改num</button>
      {/* 采用 useMemo */}
      <MemoChild person={useMemo(()=>({name:"张三"}),[])} />
		</div>
	)
}
