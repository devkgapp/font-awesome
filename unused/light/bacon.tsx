import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M566.93 104.4L470.81 8.91a31 31 0 0 0-40.18-2.83c-13.64 10.1-25.15 14.39-41 20.3C247 79.52 209.26 191.29 200.65 214.11c-29.75 78.82-89.55 94.67-98.72 98.08-24.86 9.26-54.73 20.38-91.07 50.36C-3 374-3.63 395 9.07 407.61l96.14 95.49a30.73 30.73 0 0 0 21.71 8.9 31.05 31.05 0 0 0 18.47-6.08c13.6-10.06 25.09-14.34 40.94-20.24 142.2-53 180-164.1 188.94-187.69C405 219.18 464.8 203.3 474 199.86c24.87-9.26 54.74-20.4 91.11-50.41 13.89-11.4 14.52-32.45 1.82-45.05zM32.43 386.25c31.64-25.81 57.68-35.51 82.06-44.55 68.47-23.3 100.93-76.1 116.1-116.29l.93-2.5c29.66-79.72 86.61-135.76 169.26-166.54 16.73-6.24 31.22-11.63 48.19-24l34.54 34.11c-18.7 12.78-35 19-51.82 25.28-28.28 10.6-57.57 21.59-97.35 61.37s-50.78 69.01-61.34 97.31c-9.88 26.27-19.16 51.06-54 85.95s-59.66 44.16-85.91 54c-19.66 7.37-39.86 15.13-63.64 32.37zm429-215.9c-68.53 23.35-101 76.16-116.14 116.34l-.88 2.36c-29.77 79.82-86.73 135.89-169.32 166.66-16.93 6.3-31.55 11.74-47.37 24.69l-35.23-34.83c18.67-12.74 34.93-18.91 51.76-25.22 28.28-10.6 57.53-21.57 97.31-61.33s50.75-69 61.35-97.35c9.87-26.26 19.15-51.06 54.06-86s59.69-44.19 86-54c19.65-7.37 39.86-15.15 63.67-32.42l37 36.51c-31.75 25.85-57.79 35.55-82.17 44.59z"/>
        </svg>
    )
}

export default Icon
