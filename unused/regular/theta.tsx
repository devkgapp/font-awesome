import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M176 32C78.8 32 0 132.29 0 256s78.8 224 176 224 176-100.29 176-224S273.2 32 176 32zm0 48c63.46 0 117.77 67.49 126.6 152H49.4C58.23 147.49 112.54 80 176 80zm0 352c-63.46 0-117.77-67.49-126.6-152h253.2c-8.83 84.51-63.14 152-126.6 152z"/>
        </svg>
    )
}

export default Icon