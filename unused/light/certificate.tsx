import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M495.768 272.292l-16.72-16.363 16.719-16.362c30.04-28.786 16.251-79.537-23.83-89.365l-22.768-5.811 6.464-22.698c11.232-39.997-26.115-76.468-65.449-65.451l-22.672 6.461-5.809-22.778C351.926.052 300.89-13.786 272.299 16.142L256 32.934l-16.301-16.791c-28.323-29.647-79.535-16.514-89.405 23.793l-5.807 22.768-22.672-6.461c-39.14-10.992-76.677 25.224-65.449 65.45l6.464 22.698-22.767 5.811c-40.081 9.827-53.87 60.579-23.831 89.365l16.72 16.363-16.719 16.362c-30.04 28.786-16.251 79.537 23.83 89.365l22.768 5.811-6.464 22.698c-11.221 40.203 26.255 76.429 65.449 65.45l22.672-6.461 5.807 22.767c9.93 40.578 60.865 53.609 89.366 23.836L256 479.05l16.254 16.62c28.257 29.9 79.554 16.68 89.452-23.746l5.807-22.767 22.672 6.461c39.472 11.086 76.598-25.509 65.449-65.45l-6.464-22.698 22.767-5.811c40.082-9.829 53.87-60.581 23.831-89.367zm-31.567 58.313l-54.819 13.991 15.453 54.263c4.366 15.605-10.346 30.332-25.953 25.962l-54.245-15.458L330.65 464.2c-3.796 15.884-24.347 21.136-35.285 9.334L256 433.284l-39.366 40.251c-11.051 11.681-31.4 6.919-35.285-9.334l-13.986-54.837-54.245 15.458c-15.603 4.368-30.32-10.354-25.953-25.962l15.453-54.263-54.819-13.991c-15.733-3.762-21.326-23.942-9.331-35.297l40.237-39.379-40.237-39.379c-11.989-11.35-6.407-31.532 9.331-35.296l54.819-13.991L87.165 113c-4.366-15.605 10.346-30.332 25.953-25.962l54.245 15.458 13.986-54.837c3.743-15.664 24.233-21.016 35.285-9.334L256 78.873l39.366-40.548c11.179-11.816 31.583-6.152 35.285 9.334l13.986 54.837 54.245-15.458c15.603-4.368 30.32 10.354 25.953 25.962l-15.453 54.263 54.819 13.991c15.733 3.762 21.326 23.942 9.331 35.296l-40.237 39.379 40.237 39.379c11.989 11.351 6.407 31.533-9.331 35.297z"/>
        </svg>
    )
}

export default Icon
