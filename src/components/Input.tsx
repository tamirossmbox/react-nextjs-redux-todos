import React from 'react'

interface InputProps {
    value: string;
    onChange: (e: any) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input value={value} onChange={onChange} type="text" placeholder='What todo ?'/>
  )
}

export default Input