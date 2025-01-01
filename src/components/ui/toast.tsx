import * as React from "react";

export interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export type ToastActionElement = React.ReactElement;

export function Toast(props: ToastProps) {
  return <div className={props.className}>{props.children}</div>;
}
