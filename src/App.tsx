import React from 'react'
import './styles.css'
// 简单示例
import DomUseRef from './ref/domUseRef'
// 只用useState
import LinkButton from './ref/likeButton'
// 采用全局变量修复跨渲染获取状态
import GlobalFix1 from './ref/globalFix1'
// 采用useRef修复跨渲染获取状态
import UseRefFix2 from './ref/useRefFix2'
// 全局变量与useRef的区别
import DifferenceFix1And2 from './ref/differenceFix1and2'
// useRef与createRef的区别
import UseRefAndCreateRef from './ref/useRefAndCreateRef'

// 自定义属性传入ref
import ChildComponentRef from './ref/childComponentRef'
// 通过useImperativeHandle，配合forwardRef
import ChildComponentRef2 from './ref/childComponentRef2'
// 区分是初始渲染还是更新
import DidOrUpdate from './ref/didOrUpdate'

// import MemoParent from './memo/parent'
export default function App() {
	return (
		<div className="App">
			<ChildComponentRef2 />
		</div>
	)
}
