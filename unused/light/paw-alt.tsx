import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M367.31 300.78c-26.29-14.84-47.14-61.41-67.17-97.83C284.41 174.31 254.21 160 224 160s-60.41 14.31-76.15 42.95c-20.29 36.96-40.12 82.56-67.17 97.83C51.63 317.18 32 348.18 32 383.95c0 53.01 42.98 95.98 96 95.98 1.31.04 2.6.07 3.87.07 48.88 0 68.92-32.06 92.13-32.06S267.25 480 316.13 480c1.27 0 2.56-.02 3.87-.07 53.02 0 96-42.97 96-95.98 0-35.77-19.63-66.77-48.69-83.17zm-48.39 147.17l-2.79.05c-20.12 0-33.04-7.72-46.73-15.89-12.71-7.58-27.1-16.17-45.39-16.17s-32.69 8.59-45.39 16.17C164.93 440.28 152 448 131.88 448l-3.87-.07c-35.29 0-64-28.7-64-63.98 0-22.82 12.42-44.02 32.42-55.31 30.46-17.2 50.03-54.48 68.96-90.53 3.52-6.71 7.02-13.37 10.52-19.75C184.97 201.85 202.95 192 224 192s39.03 9.85 48.1 26.36c3.31 6.02 6.64 12.32 10.02 18.71 19.4 36.69 39.46 74.63 69.46 91.57 20 11.29 32.42 32.49 32.42 55.31 0 35.28-28.71 63.98-65.08 64zM112 200c0-30.93-25.07-56-56-56S0 169.07 0 200s25.07 56 56 56 56-25.07 56-56zm-80 0c0-13.23 10.77-24 24-24s24 10.77 24 24-10.77 24-24 24-24-10.77-24-24zm360-56c-30.93 0-56 25.07-56 56s25.07 56 56 56 56-25.07 56-56-25.07-56-56-56zm0 80c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm-96-80c30.93 0 56-25.07 56-56s-25.07-56-56-56-56 25.07-56 56 25.07 56 56 56zm0-80c13.23 0 24 10.77 24 24s-10.77 24-24 24-24-10.77-24-24 10.77-24 24-24zm-144 80c30.93 0 56-25.07 56-56s-25.07-56-56-56-56 25.07-56 56 25.07 56 56 56zm0-80c13.23 0 24 10.77 24 24s-10.77 24-24 24-24-10.77-24-24 10.77-24 24-24z"/>
        </svg>
    )
}

export default Icon
