import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M320 332v8c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm128-220v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v52h192V12c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-416 0v48h384v-48c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16zm384 352V192H32v272c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z"/>
        </svg>
    )
}

export default Icon
