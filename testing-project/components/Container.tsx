import { ReactNode } from "react";

export default function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={` max-w-6xl px-6 sm:px-8 ${className}`}>{children}</div>;


  <h3>new world</h3>
}
