import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M148 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm96-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0-96h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 192h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm-52-256h26a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6h-26V70a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm288 192a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm0-160a64 64 0 1 1-64 64 64.07 64.07 0 0 1 64-64zm143.69 221.13C606.44 355.5 577 342 546.79 342 519 342 512 352 480 352s-38.95-10-66.79-10c-30.23 0-59.65 13.48-76.9 39.11A95.5 95.5 0 0 0 320 434.67V472a40 40 0 0 0 40 40h240a40 40 0 0 0 40-40v-37.33a95.5 95.5 0 0 0-16.31-53.54zM608 472a8 8 0 0 1-8 8H360a8 8 0 0 1-8-8v-37.33A63.61 63.61 0 0 1 362.85 399c10.53-15.64 29.35-25 50.36-25 21.8 0 30 10 66.79 10s45-10 66.79-10c21 0 39.83 9.34 50.36 25A63.61 63.61 0 0 1 608 434.67zM320 128v222.31a119.48 119.48 0 0 1 32-25V128a32 32 0 0 0-32-32h-16V32a32 32 0 0 0-32-32H80a32 32 0 0 0-32 32v64H32a32 32 0 0 0-32 32v376a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V128h48V32h192v96z"/>
        </svg>
    )
}

export default Icon
