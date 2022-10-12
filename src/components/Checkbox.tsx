import { Check } from 'phosphor-react'
import * as CheckboxRadix from '@radix-ui/react-checkbox';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps){

  return(
    <CheckboxRadix.Root className="w-6 h-6 p-[2xp] bg-gray-800 rounded">
      <CheckboxRadix.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"/>
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}