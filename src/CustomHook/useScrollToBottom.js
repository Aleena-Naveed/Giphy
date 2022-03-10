import { useEffect } from "react";


export const useScrollToBottom = (onScrollEnd) => {

    useEffect(
        () => {
            const trackScrolling = () => {

                if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
                    return;
                }
                console.log("onScrollEnd is called")
                onScrollEnd();
            }
            document.addEventListener('scroll', trackScrolling);
            return () => document.removeEventListener('scroll', trackScrolling);
        },
        [])

}