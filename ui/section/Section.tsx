import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

interface SectionProps {
    children: ReactNode;
    image?: {
        src: StaticImageData,
        alt: string,
        copyright?: string,
        className?: string
    },
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    className?: string
};


export default function Section({ children, image, className, position = "top-left", ...props }: SectionProps) {

    return <section {...props} className={clsx(position, className)}>
        {!!image && <div className={clsx("overlay")}>
            <Image fill src={image.src} alt={image.alt} className={"image"} />
        </div>}
        <div className={clsx("inner-container", "text-center")}>
            {children}</div>
    </section>
}