import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';



export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps){
  return(
    <div className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs focus-within:ring-2 ring-cyan-500">
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({children}: TextInputIconProps){
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}
function TextInputInput(props: TextInputInputProps){

  return(
      <input 
        className={'flex-1 outline-none bg-transparent placeholder:text-gray-400'}
        {...props}
      />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}