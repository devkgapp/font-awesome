import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 0H32C14.3 0 0 14.3 0 32v96c0 8.8 7.2 16 16 16h16v336c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V144h16c8.8 0 16-7.2 16-16V32c0-17.7-14.3-32-32-32zM48 48h352v48H48V48zm320 416H80v-40h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-48h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-48h88c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H80v-40h288v320z"/>
        </svg>
    )
}

export default Icon
