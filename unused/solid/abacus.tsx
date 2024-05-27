import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M32 0C14.33 0 0 14.33 0 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32C64 14.33 49.67 0 32 0zm512 0c-17.67 0-32 14.33-32 32v464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V32c0-17.67-14.33-32-32-32zm-80 32h-32c-8.84 0-16 7.16-16 16v24H256V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zM352 208c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h128v-48H352v-24zm112 144h-32c-8.84 0-16 7.16-16 16v24H256v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v24h-32v-24c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h32v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-24h160v24c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16z"/>
        </svg>
    )
}

export default Icon
