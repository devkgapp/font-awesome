import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M8 224h344c59.8 0 106.8-54.6 93.8-116.7-7.6-36.3-36.9-65.6-73.2-73.2-59.1-12.3-111.5 29.8-116.3 85.4-.4 4.6 3.5 8.4 8 8.4h16.2c4.2 0 7.4-3.3 7.9-7.4 4.3-36.6 39.5-63.8 78.7-54.8 23.1 5.3 41.8 24.1 47.2 47.2 9.6 41.8-22.1 79.1-62.3 79.1H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm148 32H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h149.1c33.4 0 63.3 24.4 66.5 57.6 3.7 38.1-26.3 70.4-63.7 70.4-32.8 0-59.9-24.8-63.6-56.5-.5-4.2-3.7-7.4-7.9-7.4h-16c-4.6 0-8.4 3.9-8 8.4 4.3 49.1 45.5 87.6 95.6 87.6 54 0 97.6-44.6 96-98.9-1.6-52.7-47.5-93.2-100-93.2zm239.3 0H243.8c10.5 9.2 19.4 19.9 26.4 32h126.2c41.8 0 79.1 30.4 83.2 72 4.7 47.7-32.9 88-79.6 88-36.5 0-67.3-24.5-76.9-58-1-3.5-4-6-7.7-6h-16.1c-5 0-9 4.6-7.9 9.5C302.9 443 347 480 400 480c63 0 113.9-52 112-115.4-1.9-61.3-55.4-108.6-116.7-108.6z"/>
        </svg>
    )
}

export default Icon