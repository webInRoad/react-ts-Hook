import React, { useState } from 'react'
import Child from './child'
const MemoChild = React.memo(Child) // 新增代码
export default function Parent(props: any) {
	const [num, setNum] = useState(0)
	const handleClick = () => {
		setNum(num + 1)
	}
	return (
		<div>
      <h2>{num}</h2>
			<button onClick={handleClick}>更改num</button>
      {/* 引用子组件 */}
      {/* <Child />   */}
      {/* 新增代码 */}
			<MemoChild /> 
		</div>
	)
}
