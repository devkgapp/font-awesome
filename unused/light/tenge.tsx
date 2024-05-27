import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M376 128H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h168v312c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V160h168c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8z"/>
        </svg>
    )
}

export default Icon
