import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M32 32H16C7.16 32 0 39.16 0 48v416c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zm315.31 112L336 132.69c-6.25-6.25-16.38-6.25-22.63 0L224 222.06l-89.38-89.38c-6.25-6.25-16.38-6.25-22.63 0L100.69 144c-6.25 6.25-6.25 16.38 0 22.63L190.06 256l-89.38 89.38c-6.25 6.25-6.25 16.38 0 22.63l11.32 11.3c6.25 6.25 16.38 6.25 22.63 0L224 289.94l89.38 89.38c6.25 6.25 16.38 6.25 22.63 0l11.3-11.32c6.25-6.25 6.25-16.38 0-22.63L257.94 256l89.38-89.38c6.24-6.24 6.24-16.38-.01-22.62zM432 32h-16c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16z"/>
        </svg>
    )
}

export default Icon