import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 312v136c0 17.7-14.3 32-32 32H280c-13.3 0-24-10.7-24-24v-15.3c0-13.5 11.2-24.4 24.7-24l66.3 1.9-123-123-123 123 66.3-1.9c13.5-.4 24.7 10.5 24.7 24V456c0 13.3-10.7 24-24 24H32c-17.7 0-32-14.3-32-32V312c0-13.3 10.7-24 24-24h15.3c13.5 0 24.4 11.2 24 24.7L61.4 379l123-123-123-123 1.9 66.3c.4 13.5-10.5 24.7-24 24.7H24c-13.3 0-24-10.7-24-24V64c0-17.7 14.3-32 32-32h136c13.3 0 24 10.7 24 24v15.3c0 13.5-11.2 24.4-24.7 24L101 93.4l123 123 123-123-66.3 1.9c-13.5.4-24.7-10.5-24.7-24V56c0-13.3 10.7-24 24-24h136c17.7 0 32 14.3 32 32v136c0 13.3-10.7 24-24 24h-15.3c-13.5 0-24.4-11.2-24-24.7l1.9-66.3-123 123 123 123-1.9-66.3c-.4-13.5 10.5-24.7 24-24.7H424c13.3 0 24 10.7 24 24z"/>
        </svg>
    )
}

export default Icon
