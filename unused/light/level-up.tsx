import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M252.478 103.497L152.504 3.522c-4.697-4.697-12.311-4.697-17.008 0l-99.974 99.975c-4.696 4.697-4.696 12.311 0 17.008l8.503 8.503c4.697 4.697 12.311 4.697 17.007 0L126 64.041V476H24.024a11.996 11.996 0 0 0-8.485 3.515l-12 12C-4.021 499.074 1.333 512 12.024 512H138c13.255 0 24-10.745 24-24V64.041l64.967 64.966c4.697 4.697 12.311 4.697 17.007 0l8.503-8.503c4.697-4.696 4.697-12.31.001-17.007z"/>
        </svg>
    )
}

export default Icon
