import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean
}

export default function Phone({ imgSrc, className, dark = false, ...props } : PhoneProps) {
  return (
    <div 
        className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
        {...props}
    >
        <img 
            src={
                dark ? '/images/phone-template-dark-edges.png' 
                : '/images/phone-template-white-edges.png'
            }
            className="pointer-events-none z-50 select-none"
            alt="Phone image"
        />
        <div className="absolute -z-10 inset-0">
            <img 
                src={imgSrc}
                className="object-cover"
                alt="Overlay image phone"
            />  
        </div>
    </div>
  )
}