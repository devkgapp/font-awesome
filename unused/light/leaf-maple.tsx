import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496.06 163.47l-27.34-16.41 8.44-75.97c2.14-19.5-13.61-38.41-36.25-36.27l-75.97 8.45-16.41-27.34C342.62 6.11 332.28.16 320.81 0c-10.59-.02-21.97 5.53-28.12 15.2l-42.91 67.45c-8.33-22.52-32.9-24.41-42.53-19.2l-13.81 7.41-35.09-39.72c-6.17-7.71-15.42-12.31-25.62-12.31-10.03 0-19.37 4.47-25.16 11.7L72 70.86l-13.81-7.41c-18.48-9.99-50.1 8.62-43.72 37.31l29.41 142.69-24 10.3c-26.45 11.34-26.45 49 0 60.34l108.79 46.62L4.69 484.69c-6.25 6.25-6.25 16.38 0 22.62C7.81 510.44 11.91 512 16 512s8.19-1.56 11.31-4.69l123.98-123.98 46.62 108.74c5.19 12.18 17.11 19.92 30.19 19.92 13.12 0 24.97-7.8 30.19-19.91l10.25-23.98L411 497.5c23.83 5.29 47.82-17.22 38.97-40l-8.84-17.5 39.75-35.09c16.65-13.35 16.07-38.02.34-50.97l-40.09-35.38 7.41-13.8c6.34-11.73 1.1-35.19-19.22-42.52l67.5-42.94c20.67-13.17 20.05-43.34-.76-55.83zM342.94 279.28c-15.25 9.71-5.02 33.47 12.56 29l62.78-14.8-17.34 32.3 60.43 53.51-60.43 53.49 17.78 33.12-169.32-34.42-22.06 48.02-51.68-120.54L331.3 203.32c6.25-6.25 6.25-16.38 0-22.62-6.25-6.25-16.37-6.25-22.62 0L153.16 336.21 32.5 283.16l48-20.58L46.87 93.69l32.31 17.36 54.66-59.33 52.41 59.33 33.41-17.95.16.47-16.09 62.94c-4.45 17.53 19.18 27.83 29 12.56L321.1 32.41l26.97 44.94 97.28-9.78-10.69 96.37 44.97 28.38-136.69 86.96z"/>
        </svg>
    )
}

export default Icon
