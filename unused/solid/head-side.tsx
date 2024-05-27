import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75C397.68 33.6 334.56 0 266.09 0H192C85.96 0 0 85.96 0 192c0 56.79 24.8 107.67 64 142.82V512h256v-64h64c35.35 0 64-28.65 64-64v-64h31.96c23.16 0 38.65-23.84 29.25-45zM320 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
        </svg>
    )
}

export default Icon