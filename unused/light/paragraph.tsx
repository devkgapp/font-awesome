import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M440 32H224A160 160 0 0 0 64.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h64v408a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zM256 320h-32a128 128 0 0 1 0-256h32z"/>
        </svg>
    )
}

export default Icon