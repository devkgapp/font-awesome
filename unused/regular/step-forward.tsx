import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M372 32h-24c-6.6 0-12 5.4-12 12v183L116.5 39.4C95.9 22.3 64 36.6 64 64v384c0 27.4 31.9 41.8 52.5 24.6L336 283.9V468c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12zM112 413.5V98.4l186.7 157.1-186.7 158z"/>
        </svg>
    )
}

export default Icon