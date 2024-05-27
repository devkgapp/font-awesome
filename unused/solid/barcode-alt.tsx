import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M592 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 408c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V104c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm64 0c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V104c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v304zm64 0c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V104c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v304zm128 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V104c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm128 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V104c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"/>
        </svg>
    )
}

export default Icon