import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zm112 216c0 8.8-7.2 16-16 16h-72v72c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-72h-72c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h72v-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v72h72c8.8 0 16 7.2 16 16v16z"/>
        </svg>
    )
}

export default Icon