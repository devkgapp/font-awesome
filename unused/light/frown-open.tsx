import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm-80-232c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 112c-39.7 0-102.6 23.7-111.5 74.5-1.9 10.9 2 22.2 10.3 29.5 8.2 7.3 19.9 9.9 30.6 6.6 29.3-9 56.4-14.6 70.6-14.6s41.3 5.6 70.6 14.6c7.7 2.4 20.1 2.6 30.6-6.6 8.2-7.3 12.2-18.6 10.3-29.5-8.9-50.8-71.8-74.5-111.5-74.5zm0 64c-17.7 0-46.9 5.8-80 16 5.2-29.7 50.1-48 80-48s74.8 18.3 80 48c-33.1-10.2-62.3-16-80-16z"/>
        </svg>
    )
}

export default Icon
