import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm-80 216c0 8.8-7.2 16-16 16h-72v72c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-72h-72c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h72v-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v72h72c8.8 0 16 7.2 16 16v16z"/>
        </svg>
    )
}

export default Icon
