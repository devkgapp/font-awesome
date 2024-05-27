import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"/>
        </svg>
    )
}

export default Icon
