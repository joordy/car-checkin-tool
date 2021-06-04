// Imports
import * as Styles from './icons.styles.js'

// Component
const Icons = ({ type, width, height, opacity, fill, onClick }) => {
    switch (type) {
        case 'close':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.0232 9.49241L18.2761 15.7453C18.9886 16.4578 18.9886 17.556 18.2761 18.2685C17.9474 18.5972 17.4534 18.8176 17.0145 18.8176C16.5756 18.8176 16.0816 18.5991 15.7529 18.2685L9.49999 12.0156L3.24709 18.2685C2.91839 18.5972 2.42439 18.8176 1.98549 18.8176C1.54659 18.8176 1.05259 18.5991 0.723889 18.2685C0.0113891 17.556 0.0113891 16.4578 0.723889 15.7453L6.97679 9.49241L0.723889 3.24141C0.0113891 2.52701 0.0113891 1.43071 0.723889 0.718213C1.43639 0.0057129 2.53459 0.0057129 3.24709 0.718213L9.49999 6.97111L15.7529 0.718213C16.4654 0.0057129 17.5636 0.0057129 18.2761 0.718213C18.9886 1.43071 18.9886 2.52891 18.2761 3.24141L12.0232 9.49241Z" />
                    </svg>
                </Styles.Icon>
            )
        case 'camera':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="47"
                        height="39"
                        viewBox="0 0 47 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M45 33.2727C45 34.3095 44.5882 35.3038 43.8551 36.0369C43.122 36.77 42.1277 37.1818 41.0909 37.1818H5.90909C4.87234 37.1818 3.87804 36.77 3.14495 36.0369C2.41185 35.3038 2 34.3095 2 33.2727V11.7727C2 10.736 2.41185 9.74168 3.14495 9.00858C3.87804 8.27549 4.87234 7.86364 5.90909 7.86364H13.7273L17.6364 2H29.3636L33.2727 7.86364H41.0909C42.1277 7.86364 43.122 8.27549 43.8551 9.00858C44.5882 9.74168 45 10.736 45 11.7727V33.2727Z"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23.5 29.3637C27.8179 29.3637 31.3182 25.8633 31.3182 21.5455C31.3182 17.2276 27.8179 13.7273 23.5 13.7273C19.1821 13.7273 15.6818 17.2276 15.6818 21.5455C15.6818 25.8633 19.1821 29.3637 23.5 29.3637Z"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'creditcard':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17H21C22.1046 17 23 16.1046 23 15V3C23 1.89543 22.1046 1 21 1Z"
                            stroke="#379E09"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 7H23"
                            stroke="#379E09"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'data':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="19"
                        height="23"
                        viewBox="0 0 19 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="M11.5 1H3.1C2.54305 1 2.0089 1.22125 1.61508 1.61508C1.22125 2.0089 1 2.54305 1 3.1V19.9C1 20.457 1.22125 20.9911 1.61508 21.3849C2.0089 21.7787 2.54305 22 3.1 22H15.7C16.257 22 16.7911 21.7787 17.1849 21.3849C17.5787 20.9911 17.8 20.457 17.8 19.9V7.3L11.5 1Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.25 14.6499H12.55"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </Styles.Icon>
            )
        case 'edit':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.8945 1.18143C12.026 1.04122 12.1794 0.932766 12.3446 0.859754C12.5097 0.786807 12.6848 0.75 12.8603 0.75C13.0359 0.75 13.2109 0.786807 13.376 0.859754C13.5413 0.932766 13.6947 1.04122 13.8262 1.18143C13.9577 1.32175 14.0644 1.49091 14.138 1.68041C14.2116 1.86995 14.25 2.07461 14.25 2.28232C14.25 2.49003 14.2116 2.69469 14.138 2.88423C14.0644 3.07373 13.9577 3.24289 13.8262 3.38321L3.754 14.1268L1.05209 14.9128L1.81364 11.9343L11.8945 1.18143Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'eye':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={onClick}
                    >
                        <path
                            d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                            // stroke="#CCCCD6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                            // stroke="#CCCCD6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/*}                    <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={onClick}
                    >
                        <path
                            d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
            </svg>*/}
                </Styles.Icon>
            )
        case 'eyeOff':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={onClick}
                    >
                        <path
                            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 1L23 23"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'more':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="4"
                        height="20"
                        viewBox="0 0 4 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="2" cy="2" r="2" />
                        <circle cx="2" cy="10" r="2" />
                        <circle cx="2" cy="18" r="2" />
                    </svg>
                </Styles.Icon>
            )
        case 'qrCode':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.125 2.125H2.125V3.125V6.25V7.25H3.125H6.25H7.25V6.25V3.125V2.125H6.25H3.125ZM18.75 7.25H19.75V6.25V3.125V2.125H18.75H15.625H14.625V3.125V6.25V7.25H15.625H18.75ZM3.125 14.625H2.125V15.625V18.75V19.75H3.125H6.25H7.25V18.75V15.625V14.625H6.25H3.125ZM14.625 17.1875V20.875H13.5V13.5H16.1875V14.0625V15.0625H17.1875H20.3125H20.875V17.75H18.1875V17.1875V16.1875H17.1875H15.625H14.625V17.1875ZM8.375 8.375H1V1H8.375V8.375ZM20.875 8.375H13.5V1H20.875V8.375ZM8.375 13.5V20.875H1V13.5H8.375Z"
                            strokeWidth="2"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'success':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 10.4345V11.3251C19.9988 13.4126 19.3355 15.4438 18.1089 17.1158C16.8823 18.7877 15.1581 20.0109 13.1936 20.6027C11.2291 21.1946 9.12939 21.1235 7.20775 20.4001C5.2861 19.6767 3.64542 18.3396 2.53041 16.5884C1.4154 14.8372 0.885802 12.7656 1.02059 10.6826C1.15538 8.59966 1.94735 6.61688 3.27837 5.03001C4.60938 3.44315 6.40814 2.33722 8.40638 1.87717C10.4046 1.41712 12.4953 1.6276 14.3665 2.47722"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20 3.58105L10.5 13.2711L7.65002 10.367"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'userCheck':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 19V17C16 15.9391 15.5786 14.9217 14.8284 14.1716C14.0783 13.4214 13.0609 13 12 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.5 9C10.7091 9 12.5 7.20914 12.5 5C12.5 2.79086 10.7091 1 8.5 1C6.29086 1 4.5 2.79086 4.5 5C4.5 7.20914 6.29086 9 8.5 9Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17 9L19 11L23 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'user':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'warning':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 7V11"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 15H11.01"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'edit':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.8945 1.18143C12.026 1.04122 12.1794 0.932766 12.3446 0.859754C12.5097 0.786807 12.6848 0.75 12.8603 0.75C13.0359 0.75 13.2109 0.786807 13.376 0.859754C13.5413 0.932766 13.6947 1.04122 13.8262 1.18143C13.9577 1.32175 14.0644 1.49091 14.138 1.68041C14.2116 1.86995 14.25 2.07461 14.25 2.28232C14.25 2.49003 14.2116 2.69469 14.138 2.88423C14.0644 3.07373 13.9577 3.24289 13.8262 3.38321L3.754 14.1268L1.05209 14.9128L1.81364 11.9343L11.8945 1.18143Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
        case 'reservationCard':
            return (
                <Styles.Icon>
                    <svg
                        width="243"
                        height="139"
                        viewBox="0 0 243 139"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d)">
                            <path
                                d="M8 27C8 15.9543 16.9543 7 28 7H215C226.046 7 235 15.9543 235 27V86.7317C235 91.15 231.418 94.7317 227 94.7317H16C11.5817 94.7317 8 91.15 8 86.7317V27Z"
                                fill="#CCCCD6"
                            />
                        </g>
                        <g filter="url(#filter1_d)">
                            <path
                                d="M8 56.156C8 45.1103 16.9543 36.156 28 36.156H215C226.046 36.156 235 45.1103 235 56.156V109.177C235 120.223 226.046 129.177 215 129.177H28C16.9543 129.177 8 120.223 8 109.177V56.156Z"
                                fill="white"
                            />
                        </g>
                        <rect
                            x="157.945"
                            y="16.7185"
                            width="63.1713"
                            height="13.1896"
                            fill="#B1B1BA"
                            fillOpacity="0.6"
                        />
                        <rect
                            x="26.743"
                            y="56.2876"
                            width="137.45"
                            height="13.1896"
                            fill="#CCCCD6"
                        />
                        <rect
                            x="26.743"
                            y="72.2537"
                            width="123.566"
                            height="7.63609"
                            fill="#CCCCD6"
                        />
                        <rect
                            x="26.743"
                            y="103.492"
                            width="123.566"
                            height="7.63609"
                            fill="#CCCCD6"
                        />
                        <rect
                            x="26.743"
                            y="87.5261"
                            width="137.45"
                            height="13.1896"
                            fill="#CCCCD6"
                        />
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="243"
                                height="103.732"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_d"
                                x="0"
                                y="29.156"
                                width="243"
                                height="109.021"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </Styles.Icon>
            )
        case 'skip':
            return (
                <Styles.Icon width={width} height={height} opacity={opacity} fill={fill}>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.9375 5.875L14 9.9375L9.9375 14"
                            stroke="#F87700"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 1V6.6875C1 7.54945 1.34241 8.3761 1.9519 8.9856C2.5614 9.59509 3.38805 9.9375 4.25 9.9375H14"
                            stroke="#F87700"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Styles.Icon>
            )
    }
}

export default Icons
