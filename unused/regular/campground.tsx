import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M624 464h-28.53l-245.9-341.21 63.33-87.88c5.22-7.12 3.68-17.14-3.44-22.36L396.58 3.1c-7.13-5.23-17.14-3.69-22.37 3.44L320 81.76 265.79 6.54c-5.22-7.13-15.24-8.67-22.37-3.44l-12.88 9.45c-7.12 5.22-8.67 15.24-3.44 22.36l63.33 87.88L44.53 464H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM320 163.82L536.33 464h-99.97L320 304 203.64 464h-99.97L320 163.82z"/>
        </svg>
    )
}

export default Icon
