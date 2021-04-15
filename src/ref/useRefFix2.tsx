import React, { useRef } from 'react'
const LikeButton: React.FC = () => {
	// 定义一个实例变量
	let like = useRef(0)
	function handleAlertClick() {
		setTimeout(() => {
			alert(`you clicked on ${like.current}`)
		}, 3000)
	}
	return (
		<>
			<button
				onClick={() => {
					like.current = like.current + 1
				}}
			>
				{like.current}赞
			</button>
			<button onClick={handleAlertClick}>Alert</button>
		</>
	)
}
export default LikeButton
