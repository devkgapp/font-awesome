import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 464H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM346 32H38A38 38 0 0 0 0 70v139.43a32 32 0 0 0 11 24.14l37 32.21c0 48.49 1.54 93-11.85 166.22h49C98 356.41 96 309.53 96 238.22l-48-41.78V80h64v48h48V80h64v48h48V80h64v116.44l-48 41.78C288 309 286 356.6 298.86 432h49C334.47 358.81 336 314 336 265.78l37-32.21a32 32 0 0 0 11-24.14V70a38 38 0 0 0-38-38zM192 224a32 32 0 0 0-32 32v64h64v-64a32 32 0 0 0-32-32z"/>
        </svg>
    )
}

export default Icon
