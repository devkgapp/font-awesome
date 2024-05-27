import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 183.23C640 135.14 598.38 96 547.19 96c-39.72 0-75 23.73-87.84 59.06C458.23 158.3 452.72 176 448 176H192c-4.72 0-10.23-17.7-11.34-20.94C167.81 119.73 132.53 96 92.81 96 41.62 96 0 135.14 0 183.23c0 29.45 8.09 53.34 32.34 72.77C7.93 275.57 0 299.54 0 328.77 0 376.86 41.62 416 92.81 416c39.72 0 75-23.73 87.84-59.05 1.09-3.23 6.89-20.95 11.34-20.95h256c4.45 0 10.25 17.73 11.34 20.95 12.84 35.31 48.12 59.05 87.84 59.05 51.19 0 92.81-39.14 92.81-87.23 0-29.23-7.93-53.19-32.34-72.77 24.27-19.43 32.36-43.31 32.36-72.77zm-72.06 104.3c19.34 8.88 24.06 23.12 24.06 41.23 0 21.64-20.09 39.23-44.81 39.23-19.59 0-36.75-11.02-42.72-27.41C494.42 310.66 483.78 288 448 288H192c-35.78 0-46.42 22.66-56.47 52.59-5.97 16.39-23.12 27.41-42.72 27.41C68.09 368 48 350.41 48 328.77c0-18.12 4.72-32.36 24.06-41.23 12.62-5.81 20.5-17.89 20.5-31.53s-7.84-25.7-20.5-31.53C52.28 215.39 48 200.72 48 183.23 48 161.59 68.09 144 92.81 144c19.59 0 36.75 11.02 42.72 27.42C154.17 225.19 176.64 224 192 224h256c15.36 0 37.83 1.19 56.47-52.58 5.97-16.41 23.12-27.42 42.72-27.42 24.72 0 44.81 17.59 44.81 39.23 0 17.48-4.28 32.16-24.06 41.23-12.66 5.83-20.5 17.89-20.5 31.53s7.87 25.73 20.5 31.54z"/>
        </svg>
    )
}

export default Icon
