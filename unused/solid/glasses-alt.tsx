import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M560.51 225.9L528.75 98.64C522.05 71.78 495.01 32 443.33 32c-15.63 0-23.03 2.94-43.02 9.6-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.24 6.7 8.48 10.94 15.18 10.94 3.54 0 4.82-.74 18.23-5.21 26.07-8.68 48.2 6.13 53.53 27.54l29.67 118.68C490.97 215.88 466.47 208 440 208c-55.09 0-102.27 32.91-123.65 80h-56.7c-21.38-47.09-68.56-80-123.65-80-26.47 0-50.97 7.88-71.86 20.96l29.67-118.68c5.32-21.41 27.46-36.22 53.53-27.54 13.42 4.47 14.7 5.21 18.23 5.21 6.7 0 12.94-4.24 15.18-10.94l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24C155.7 34.94 148.3 32 132.67 32 81 32 53.95 71.78 47.25 98.64L15.49 225.9C2.16 279.34 0 300.12 0 344c0 75.11 60.89 136 136 136 72.37 0 130.97-56.69 135.19-128h33.61c4.22 71.31 62.82 128 135.19 128 75.11 0 136-60.89 136-136 .01-43.88-2.15-64.66-15.48-118.1zM136 416c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72zm304 0c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"/>
        </svg>
    )
}

export default Icon
