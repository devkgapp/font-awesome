import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 160h-96v96h96zm0 192h96v-96h-96zM480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-32 160h-96v96h96v96h-96v96h-96v-96h-96v96H64v-96h96v-96H64v-96h96V64h96v96h96V64h96z"/>
        </svg>
    )
}

export default Icon
