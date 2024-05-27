import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M288 0C110.12 0 0 93.77 0 180.66c0 37.74 26 66.42 64 73.54V480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V254.41c39.71-6.85 64-35.73 64-73.75C576 93.77 465.88 0 288 0zm215.84 207.11L464 208v256H112V208l-39.16-1C65.37 205.62 48 200.25 48 180.66 48 126.44 133.46 48 288 48s240 78.44 240 132.66c0 14.99-7.9 23.64-24.16 26.45z"/>
        </svg>
    )
}

export default Icon