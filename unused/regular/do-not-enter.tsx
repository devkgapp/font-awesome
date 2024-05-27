import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M394.67 192H101.33C93.97 192 88 199.16 88 208v96c0 8.84 5.97 16 13.33 16h293.33c7.36 0 13.33-7.16 13.33-16v-96c.01-8.84-5.96-16-13.32-16zM360 272H136v-32h224v32zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"/>
        </svg>
    )
}

export default Icon