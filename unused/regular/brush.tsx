import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 0H32C14.33 0 0 14.33 0 32v288c0 35.35 28.65 64 64 64h48v48c0 44.18 35.82 80 80 80s80-35.82 80-80v-48h48c35.35 0 64-28.65 64-64V32c0-17.67-14.33-32-32-32zm-16 48v176H48V48h288zm-16 288h-96v96c0 17.64-14.36 32-32 32s-32-14.36-32-32v-96H64c-8.82 0-16-7.18-16-16v-48h288v48c0 8.82-7.18 16-16 16z"/>
        </svg>
    )
}

export default Icon
