import React, { useRef } from 'react'
// 定义一个全局变量
let like = 0
const LikeButton: React.FC = () => {
	let likeRef = useRef(0)
	function handleAlertClick() {
		setTimeout(() => {
			alert(`you clicked on ${like}`)
			alert(`you clicked on ${likeRef.current}`)
		}, 3000)
	}
	return (
		<p>
			<button
				onClick={() => {
					like = ++like
					likeRef.current = likeRef.current + 1
				}}
			>
				点赞
			</button>
			<button onClick={handleAlertClick}>Alert</button>
		</p>
	)
}
export default LikeButton
