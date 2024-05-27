import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M89.69 195.2a13.87 13.87 0 1 0-13.81-13.87 13.84 13.84 0 0 0 13.81 13.87zm223.91 240L288 416v-30.13a78.67 78.67 0 0 0 16-47.13V232.61C304 139.64 228.38 64 135.42 64h-80a55.65 55.65 0 0 0-52.31 74.15 62.19 62.19 0 0 0-3.06 19.56v84.84a67.88 67.88 0 0 0 37 60.43q-15.76 22.09-20.2 51.52A75.61 75.61 0 0 0 32 411.57V416L6.4 435.2A16 16 0 0 0 0 448v48a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-48a16 16 0 0 0-6.4-12.8zM55.43 112h80C201.74 112 256 166.27 256 232.61v106.13a32 32 0 0 1-9.37 22.63L240 368H64.8c-.19-2.14-.78-4.23-.45-6.4 4.34-29 21.48-45.89 46.18-57l34.85-10.86A24.76 24.76 0 0 0 160 271.19v-48.26l-27.12 4.7a14.88 14.88 0 0 0-7.72 9.68l-5.68 18.95A19.76 19.76 0 0 1 108 268.93c-5.54 2.22-10.22 4.61-15.48 4.61a18.67 18.67 0 0 1-7.71-1.74l-25-11.15A19.83 19.83 0 0 1 48 242.55v-84.84c0-7.37 4.39-10.55 9.85-16l-8.71-17.61c-3.3-6.63 1.14-12.1 6.29-12.1zM48 464l32-24v-24h160v24l32 24z"/>
        </svg>
    )
}

export default Icon
