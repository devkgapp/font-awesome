import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M96 464V48c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16zm112 0V48c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16z"/>
        </svg>
    )
}

export default Icon
