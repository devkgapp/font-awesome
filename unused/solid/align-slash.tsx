import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M633.82 458.1L496.54 352H528a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H413.73l-82.81-64H528a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H248.12l-82.81-64H528a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H112a15.82 15.82 0 0 0-15 11.18L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM112 416a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h340.83L370 416zm0-64h175.21l-82.8-64H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"/>
        </svg>
    )
}

export default Icon