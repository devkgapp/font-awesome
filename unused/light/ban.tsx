import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zM103.265 408.735c-80.622-80.622-84.149-208.957-10.9-293.743l304.644 304.643c-84.804 73.264-213.138 69.706-293.744-10.9zm316.37-11.727L114.992 92.365c84.804-73.263 213.137-69.705 293.743 10.9 80.622 80.621 84.149 208.957 10.9 293.743z"/>
        </svg>
    )
}

export default Icon
