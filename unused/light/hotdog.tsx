import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M469.96 179.21l13.62-13.63C501.91 147.27 512 122.91 512 97s-10.09-50.27-28.42-68.59C465.28 10.1 440.92 0 415 0s-50.28 10.1-68.6 28.43l-13.62 13.62-22.15-22.15C297.44 6.69 280.37 0 263.83 0c-14.79 0-29.16 5.35-39.98 16.17L16.17 223.85c-22.94 22.94-21.27 61.8 3.72 86.79l22.15 22.15-13.63 13.63C10.09 364.73 0 389.09 0 415s10.09 50.27 28.42 68.59C46.72 501.9 71.08 512 97 512s50.28-10.1 68.6-28.43l13.62-13.62 22.15 22.15c13.2 13.2 30.26 19.89 46.81 19.89 14.79 0 29.16-5.35 39.98-16.17l207.68-207.68c22.94-22.94 21.27-61.8-3.72-86.79l-22.16-22.14zM38.8 246.47L246.47 38.8c10.91-10.91 29.79-8.02 41.54 3.72l22.15 22.15L64.67 310.16l-22.15-22.15c-12.48-12.48-14.15-31.11-3.72-41.54zm104.16 214.49c-25.36 25.38-66.54 25.4-91.91 0-25.39-25.38-25.39-66.54 0-91.91l318-318c25.36-25.38 66.54-25.4 91.91 0 25.39 25.38 25.39 66.54 0 91.91l-318 318zM473.2 265.53L265.52 473.2c-10.89 10.89-29.77 8.04-41.53-3.72l-22.15-22.15 245.49-245.49 22.15 22.15c12.48 12.48 14.15 31.11 3.72 41.54zM416 96c-12.4 12.41-21.76 14.01-34.71 16.23-14.4 2.47-32.33 5.55-51.92 25.14-19.6 19.6-22.67 37.52-25.14 51.92-2.22 12.95-3.83 22.3-16.23 34.71-12.4 12.4-21.76 14.01-34.71 16.23-14.4 2.47-32.33 5.55-51.92 25.14-19.6 19.6-22.67 37.52-25.14 51.92C174 330.25 172.4 339.6 160 352c-12.4 12.4-21.76 14.01-34.7 16.23-14.4 2.47-32.33 5.54-51.92 25.14-6.25 6.25-6.25 16.38 0 22.63 3.12 3.12 7.22 4.69 11.31 4.69S92.88 419.12 96 416c12.4-12.4 21.76-14.01 34.7-16.23 14.4-2.47 32.33-5.54 51.92-25.14 19.6-19.6 22.67-37.52 25.14-51.92 2.22-12.95 3.83-22.3 16.23-34.71 12.4-12.4 21.76-14.01 34.71-16.23 14.4-2.47 32.33-5.55 51.92-25.14s22.67-37.52 25.14-51.92c2.22-12.95 3.83-22.3 16.23-34.71s21.76-14.01 34.71-16.23c14.4-2.47 32.33-5.55 51.92-25.14 6.25-6.25 6.25-16.38 0-22.63-6.24-6.25-16.37-6.25-22.62 0z"/>
        </svg>
    )
}

export default Icon
