import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 8C111.2 8 0 119.2 0 256s111.2 248 248 248 248-111.2 248-248S384.8 8 248 8zm172 378.1c-85.6 22.4-176.5 4.8-247.7-46.9 21.3-25.6 47.1-47.5 76.5-64.8 84.3 47.1 159.8 45.1 207.5 37.9-7.3 27-19.8 52-36.3 73.8zm42.8-107.2c-24.4 4.6-48.9 6.4-73.2 4.9 8.7-81.6-13.6-162.9-61.8-228.3 59.2 23.6 148.2 98.2 135 223.4zM274.4 41.8c62.3 62.9 92.6 150.4 83.4 238.1-32.8-5.6-64.5-17-94.2-33.7-1-72.8-25.7-142.2-70.9-198.9 40.2-10.5 69.3-7 81.7-5.5zM160.5 58.7c16.1 18.8 30 39.1 40.8 60.8C126.4 152.7 67.1 212.7 34.5 287 14 145.8 123.2 75.3 160.5 58.7zM49.2 340.4c23.3-85.5 84-155.6 164.6-191.5 11.5 31.2 17.5 64.4 17.9 98.4-62.6 37.2-110.3 93.5-136.8 160.9-19.2-19.4-34.9-42.3-45.7-67.8zm71.7 89.9c8.1-23.2 18.8-45.2 32.1-65.3 47.5 34.6 125.7 71.9 228.5 60.5-52.5 41.4-160.7 77.9-260.6 4.8z"/>
        </svg>
    )
}

export default Icon
