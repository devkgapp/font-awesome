import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 328c-13.25 0-24 10.74-24 24s10.75 24 24 24 24-10.74 24-24-10.75-24-24-24zm195.95-104H416V96c0-35.29-28.71-64-64-64-13.16 0-25.41 3.99-35.6 10.84C307.65 17.91 283.88 0 256 0s-51.65 17.91-60.4 42.84A63.603 63.603 0 0 0 160 32c-35.29 0-64 28.71-64 64v128H60.06C18.96 224 .05 261.31 0 288c-.03 15.18 5.04 30.12 14.79 42.06L104.6 440.1c37.33 45.7 92.52 71.9 151.41 71.9s114.08-26.21 151.4-71.89l89.8-110.04c9.74-11.94 14.81-26.88 14.79-42.07-.05-26.76-19.31-64-60.05-64zm20.48 85.83L385.05 416.9c-24.74 30.29-58.67 52.64-97.07 60.03-60.8 11.71-120.68-10.67-158.59-57.07l-89.8-110.03c-7.6-9.31-9.65-22.89-5.19-34.58C38.81 263.56 48.9 256 60.06 256H128V97.95c0-15.96 10.8-30.84 26.53-33.49C174.52 61.1 192 76.61 192 96v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V65.95c0-15.96 10.8-30.84 26.53-33.49C270.52 29.1 288 44.61 288 64v152c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V97.95c0-15.96 10.8-30.84 26.53-33.49C366.52 61.1 384 76.61 384 96v160h67.95c11.16 0 21.25 7.56 25.67 19.25 4.46 11.69 2.41 25.27-5.19 34.58zM256 272c-18.79 0-57.96 1.82-112.12 69.86-4.59 5.77-4.59 14.51 0 20.27C198.07 430.22 237.24 432 256 432c18.79 0 57.96-1.82 112.12-69.87 4.59-5.77 4.59-14.51 0-20.27C313.93 273.78 274.76 272 256 272zm0 128c-44.18 0-80-48-80-48s35.82-48 80-48 80 48 80 48-35.82 48-80 48z"/>
        </svg>
    )
}

export default Icon
