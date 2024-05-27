import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-24 446.42c-44.87-5.4-85.21-25.63-115.91-55.75L224 305.93v148.49zm48-148.49l115.91 92.73c-30.71 30.12-71.04 50.35-115.91 55.75V305.93zM48 256c0-102.14 77.02-186.51 176-198.42v186.88L78.18 361.12C59.17 330.54 48 294.59 48 256zm369.82 105.12L272 244.46V57.58C370.98 69.49 448 153.86 448 256c0 38.59-11.17 74.54-30.18 105.12z"/>
        </svg>
    )
}

export default Icon
