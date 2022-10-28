import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot(props: InputRootProps) {
  return (
    <div className="w-full flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}
InputRoot.displayName = "Input.Root";

export interface InputIconProps {
  children: ReactNode;
  id: string;
}

function InputIcon(props: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400" id={props.id}>{props.children}</Slot>;
}
InputIcon.displayName = "Input.Icon";

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props: InputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}
InputInput.displayName = "Input.Input";

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Input: InputInput,
};
