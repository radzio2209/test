import { Children, ReactElement } from "react";

type MessageProps = {
    classes?: string;
    children: ReactElement | ReactElement[]| string;
  };
  
  export default function Message(props: MessageProps) {
    let classes = "bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
    if (props.classes)classes+=props.classes;
    

    return (
        <div className={classes} role="alert">
        <div className="flex">
         {props.children}
        </div>
      </div>
    );
  }