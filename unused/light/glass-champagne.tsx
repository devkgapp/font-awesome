import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M255 212.3L228 27.4C225.7 11.7 212.2 0 196.3 0H59.7C43.8 0 30.3 11.7 28 27.4L1 212.3c-9 68.8 41.9 129.5 111 138V480H58.7C43.9 480 32 491.9 32 506.7c0 2.9 2.4 5.3 5.3 5.3h181.3c3 0 5.3-2.4 5.3-5.3 0-14.7-11.9-26.7-26.7-26.7H144V350.3c69-8.4 120-69.2 111-138zM196.3 32l14 96H45.7l14-96h136.6zM32.7 216.9L41 160h174l8.2 56.5c3.4 25.7-4.3 50.8-21.8 70.7-18.2 20.8-45 32.8-73.4 32.8s-55.2-12-73.5-32.8c-17.4-19.9-25.1-45-21.8-70.3z"/>
        </svg>
    )
}

export default Icon
