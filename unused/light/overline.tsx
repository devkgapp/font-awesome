import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M439 0H7a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8zM223 96A160 160 0 0 0 63 256v96a160 160 0 0 0 320 0v-96A160 160 0 0 0 223 96zm128 256a128 128 0 0 1-256 0v-96a128 128 0 0 1 256 0z"/>
        </svg>
    )
}

export default Icon