
import {define, string} from '@react-form-builder/core'

type MatInputProps =  {
  onChange?: (value: any) => void,
  value?: string
}

const MatInput = (props: MatInputProps) => {
  const {onChange, ...otherProps} = props
  return <input {...otherProps} onChange={event => {
    console.log("onChange", onChange);
    console.log("event.target.value", event.target.value);
    console.log("this", this);
    console.log("otherProps", otherProps);
    onChange?.(Math.random())
  }}/>
}

export const matInput = define(MatInput, 'MatInput')
  .name('Input')
  .props({
    value: string.valued.default('')
  })