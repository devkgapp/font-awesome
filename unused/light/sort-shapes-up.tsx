import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M264 480h144a24 24 0 0 0 24-24V312a24 24 0 0 0-24-24H264a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24zm8-160h128v128H272zM120.44 35.51a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17l5.61 5.68a11.93 11.93 0 0 0 16.91.09l54-52.74V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17zM444.1 182.86L361 45.71a29.56 29.56 0 0 0-49.9 0l-83.2 137.15c-11.08 18.28 2.77 41.14 24.95 41.14h166.3c22.18 0 36.03-22.86 24.95-41.14zM259.77 192L336 66.28 412.23 192z"/>
        </svg>
    )
}

export default Icon