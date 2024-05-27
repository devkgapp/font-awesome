import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M631.14 195.68C579.47 109.99 466.31 32 417.72 32c0 0-32.57 0-97.72 50-65.15-50-97.72-50-97.72-50-48.59 0-161.75 77.99-213.42 163.68-10.32 17.11-11.63 37.99-3.89 56.38C32.95 318.51 117.59 480 279.28 480h81.43c161.69 0 246.33-161.49 274.32-227.95 7.74-18.38 6.43-39.26-3.89-56.37zm-40.34 37.74C565.65 293.13 492.91 432 360.72 432h-81.43C147.09 432 74.35 293.13 49.2 233.42c-1.84-4.38-1.57-9.1.76-12.96C96.28 143.65 191.9 83.43 220.33 80.14 250 87.12 290.29 119.71 320 142.5c33.12-25.41 70.35-55.46 99.67-62.36 28.47 3.31 124.06 63.53 170.37 140.32 2.32 3.86 2.6 8.59.76 12.96zm-57.83-2.18C512.72 223.25 465.99 208 404 208c-33.36 8.34-51.13 14-84 14-32.53 0-49.47-5.37-84-14-61.99 0-108.72 15.25-128.96 23.24-5.51 2.17-6.8 9.23-2.41 13.2C128.18 265.73 199.97 320 320 320s191.82-54.27 215.37-75.56c4.39-3.97 3.1-11.03-2.4-13.2z"/>
        </svg>
    )
}

export default Icon
