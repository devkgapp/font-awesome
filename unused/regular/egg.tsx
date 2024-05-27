import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0zm0 464c-79.4 0-144-64.6-144-144 0-117.41 90.58-272 144-272s144 154.59 144 272c0 79.4-64.6 144-144 144z"/>
        </svg>
    )
}

export default Icon