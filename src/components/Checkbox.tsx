import { Check } from 'phosphor-react'
import * as CheckboxRadix from '@radix-ui/react-checkbox';

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {}

export function Checkbox(props: CheckboxProps){

  return(
    <CheckboxRadix.Root id="check" aria-label="check" className="w-6 h-6 p-[2xp] bg-gray-800 rounded" {...props}>
      <CheckboxRadix.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"/>
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}