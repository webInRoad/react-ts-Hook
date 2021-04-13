import React, {
	MutableRefObject,
	useState,
	useImperativeHandle,
	useRef,
	forwardRef,
	useCallback
} from 'react'
interface IProps {
	label: string
}
let ChildInput = forwardRef((props: IProps, ref: any) => {
	const { label } = props
	const [value, setValue] = useState('')
	// 作用: 减少父组件获取的DOM元素属性,只暴露给父组件需要用到的DOM方法
	// 参数1: 父组件传递的ref属性
	// 参数2: 返回一个对象,父组件通过ref.current调用对象中方法
	useImperativeHandle(ref, () => ({
		getValue
	}))
	const handleChange = (e: any) => {
		const value = e.target.value
		setValue(value)
	}
	const getValue = useCallback(() => {
		return value
	}, [value])
	return (
		<div>
			<span>{label}:</span>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	)
})
const ParentCom: React.FC = (props: any) => {
	const childRef: MutableRefObject<any> = useRef({})
	const handleFocus = () => {
		const node = childRef.current
		alert(node.getValue())
	}
	return (
		<div>
			<ChildInput label={'名称'} ref={childRef} />
			<button onClick={handleFocus}>focus</button>
		</div>
	)
}

export default ParentCom
