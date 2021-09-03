import {useEffect, useRef} from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
    move?: string;
}

export default function ScrollRevealContainer({children,move}){
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {

        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: true,
                delay: 400,
                opacity: 0,
                origin:
                    move === "left"
                        ? "left"
                        : move === "right"
                            ? "right"
                            : move === "top"
                                ? "top"
                                : "bottom",
                distance: "40px"
            });
    }, [sectionRef]);
    return <section ref={sectionRef}>{children}</section>;

}