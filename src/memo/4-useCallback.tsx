// 新增引入 useCallback
import React, { useState, useCallback } from 'react'
import Child from './child'
const MemoChild = React.memo(Child)
export default function Parent(props: any) {
	const [num, setNum] = useState<number>(0)
	const handleClick = () => {
		setNum(num + 1)
	}
  // 修改代码
  // 通过 useCallback 进行记忆 handleChange, 并将记忆的 handleChange 传递给 MemoChild
	const memoizedCallback = useCallback(() => {
		console.info(2323)
	},[])
	return (
		<div>
			<h2>{num}</h2>
			<button onClick={handleClick}>更改num</button>
			{/* 引用子组件 */}
			{/* <Child />   */}
			{/* <MemoChild />  */}
			{/* 新增代码 */}
			{/* 父组件传递 handleChange 事件给子组件 */}
			<MemoChild handleChange={memoizedCallback} />
		</div>
	)
}
