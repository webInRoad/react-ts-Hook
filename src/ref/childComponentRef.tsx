import React, {
	MutableRefObject,
	useState,
	useEffect,
	useRef,
	useCallback
} from 'react'
interface IProps {
	//prettier-ignore
	label: string,
	cRef: MutableRefObject<any>
}
const ChildInput: React.FC<IProps> = (props) => {
	const { label, cRef } = props
	const [value, setValue] = useState('')
	const handleChange = (e: any) => {
		const value = e.target.value
		setValue(value)
	}
	const getValue = useCallback(() => {
		return value
	}, [value])
	useEffect(() => {
		if (cRef && cRef.current) {
			cRef.current.getValue = getValue
		}
	}, [getValue])
	return (
		<div>
			<span>{label}:</span>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	)
}

const ParentCom: React.FC = (props: any) => {
	const childRef: MutableRefObject<any> = useRef({})
	const handleFocus = () => {
		const node = childRef.current
		alert(node.getValue())
	}
	return (
		<div>
			<ChildInput label={'名称'} cRef={childRef} />
			<button onClick={handleFocus}>focus</button>
		</div>
	)
}

export default ParentCom
