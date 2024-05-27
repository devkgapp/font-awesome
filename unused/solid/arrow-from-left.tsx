import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm254.5-269.6l65.6 65.6H120c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h200.1l-65.6 65.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L441 273c9.4-9.4 9.4-24.6 0-33.9L305.5 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6-.1 33.9z"/>
        </svg>
    )
}

export default Icon
