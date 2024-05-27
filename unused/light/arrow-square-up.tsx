import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M100.5 243.5l115-115.1c4.7-4.7 12.3-4.7 17 0l115 115.1c4.7 4.7 4.7 12.3 0 17l-6.9 6.9c-4.7 4.7-12.5 4.7-17.1-.2L241 181.7V372c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12V181.7l-82.5 85.6c-4.7 4.8-12.4 4.9-17.1.2l-6.9-6.9c-4.7-4.8-4.7-12.4 0-17.1zM0 432V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm32 0c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v352z"/>
        </svg>
    )
}

export default Icon
