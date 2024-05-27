import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm.01 474c-19.67-28.17-37.09-52.85-52.49-74.69C42.64 261.97 32 245.11 32 192c0-88.22 71.78-160 160-160s160 71.78 160 160c0 53.11-10.64 69.97-107.52 207.31-15.52 22.01-33.09 46.92-52.47 74.69zm64.01-368.65c-12.5-12.47-32.75-12.47-45.25 0l-94.09 94.09c-2 2.02-3.44 4.51-4.16 7.27l-16 61.25c-1.44 5.5.12 11.34 4.16 15.36 3.03 3.05 7.12 4.69 11.31 4.69 1.34 0 2.72-.17 4.03-.52l61.25-16c2.75-.72 5.28-2.15 7.28-4.17l94.09-94.09c12.47-12.47 12.47-32.78 0-45.25l-22.62-22.63zM165 241.61l-30.62 8 8-30.61 91.03-91.03 22.62 22.62L165 241.61z"/>
        </svg>
    )
}

export default Icon
