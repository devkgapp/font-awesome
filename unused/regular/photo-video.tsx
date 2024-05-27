import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 0H160c-17.67 0-32 13.13-32 29.33V112h48V48h48v64h48V48h224v304h112c17.67 0 32-13.13 32-29.33V29.33C640 13.13 625.67 0 608 0zm-16 304h-48v-56h48zm0-104h-48v-48h48zm0-96h-48V48h48zM128 320a32 32 0 1 0-32-32 32 32 0 0 0 32 32zm288-160H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zm-16 240L299.31 299.31a16 16 0 0 0-22.62 0L176 400l-36.69-36.69a16 16 0 0 0-22.62 0L48 432V208h352z"/>
        </svg>
    )
}

export default Icon
