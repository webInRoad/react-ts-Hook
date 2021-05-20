import React, { useState } from 'react'
import Child from './child'
const MemoChild = React.memo(Child) 
export default function Parent(props: any) {
	const [num, setNum] = useState<number>(0)
	const handleClick = () => {
		setNum(num + 1)
	}
  const handleChange = () => {
    console.info(2323)
  }
 	return (
		<div>
      <h2>{num}</h2>
			<button onClick={handleClick}>更改num</button>
      {/* 引用子组件 */}
      {/* <Child />   */}
      {/* <MemoChild />  */}
      {/* 新增代码 */}
      {/* 父组件传递 handleChange 事件给子组件 */}
			<MemoChild handleChange={handleChange}/> 
		</div>
	)
}
