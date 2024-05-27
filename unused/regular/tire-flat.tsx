import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 488.02c0 13.23 10.71 23.94 23.92 23.98h464.16c13.22-.04 23.92-10.76 23.92-23.98 0-13.26-10.74-24-24-24h-20.38C495.6 422.98 512 373.42 512 320c0-141.38-114.62-256-256-256S0 178.62 0 320c0 53.42 16.4 102.98 44.38 144.02H24c-13.26 0-24 10.74-24 24zm232-46.45c-36.13-7.12-66.23-30.21-83.72-61.35l42.71-13.88c9.96 13.94 24.31 24.31 41.01 29.59v45.64zm-55.93-120.85l-42.6 13.84c-.58-4.84-1.47-9.58-1.47-14.56 0-32.48 12.83-61.85 33.34-83.98l26.55 36.55C182.03 285.87 176 302.17 176 320c0 .25.07.47.07.72zM256 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm-51.89-144.25c24.13-11.21 61.58-19.6 103.77 0l-26.66 36.7c-22.06-7.37-37.63-4.28-50.45 0l-26.66-36.7zM280 441.57v-45.64c16.7-5.28 31.04-15.64 41.01-29.59l42.71 13.88c-17.49 31.15-47.59 54.23-83.72 61.35zm40.11-169l26.55-36.55C367.17 258.15 380 287.52 380 320c0 4.99-.9 9.73-1.47 14.56l-42.6-13.84c0-.25.07-.47.07-.72 0-17.83-6.03-34.13-15.89-47.43zM256 112c114.69 0 208 93.31 208 208 0 55.89-22.27 106.6-58.27 144.02h-56.12C396.71 433.33 428 380.41 428 320c0-94.99-77.01-172-172-172S84 225.01 84 320c0 60.41 31.29 113.33 78.4 144.02h-56.13C70.27 426.6 48 375.89 48 320c0-114.69 93.31-208 208-208z"/>
        </svg>
    )
}

export default Icon
