import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M637 485.25L23 1.75A8 8 0 0 0 11.76 3l-10 12.51A8 8 0 0 0 3 26.75l614 483.5a8 8 0 0 0 11.24-1.25l10-12.51a8 8 0 0 0-1.24-11.24zM48 384a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h31.85L40.21 96.79A47.9 47.9 0 0 0 0 144v224a48 48 0 0 0 48 48h397.58L405 384zm568-224h-8v-16a48 48 0 0 0-48-48H194.4l40.6 32h325a16 16 0 0 1 16 16v48h32v128h-32v48a16 16 0 0 1-15.89 16l28.45 22.41A47.81 47.81 0 0 0 608 368v-16h8a24 24 0 0 0 24-24V184a24 24 0 0 0-24-24z"/>
        </svg>
    )
}

export default Icon
