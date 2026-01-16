import styled, { keyframes } from 'styled-components';
import heartEmpty from '../../../../assets/images/tree/heart.png';
import alfa from '../../../../assets/images/tree/alfaTree.png';
import avito from '../../../../assets/images/tree/avitoTree.png';
import ft from '../../../../assets/images/tree/ftTree.png';
import lemana from '../../../../assets/images/tree/lemanaTree.png';
import otp from '../../../../assets/images/tree/otpTree.png';
import psb from '../../../../assets/images/tree/psbTree.png';
import vtb from '../../../../assets/images/tree/vtbTree.png';
import yandex from '../../../../assets/images/tree/yandexTree.png';
import { companiesLength } from '../../../../shared/configs/companies-config';
import { SCREEN_NAMES } from '../../../../constants/screens';

const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const ShiningGroup = styled.g`
    opacity: 0;
    animation: ${appear} 300ms ease-out forwards;
`;


export const HeartsBlockMobile = ({ opened = [], onClick, ...props}) => (
    <svg {...props} width="100%" height="100%" viewBox="0 0 365 667" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        {opened.length === companiesLength && (
                <ShiningGroup clip-path="url(#clip0_3049_312)">
                    <g opacity="0.62" filter="url(#filter0_dddddd_3049_312)">
                    <path d="M312.999 452.179C312.569 452.179 312.149 452.046 311.798 451.797L311.776 451.781L311.718 451.739L311.496 451.579C307.078 448.315 302.919 444.716 299.057 440.812C295.878 437.578 292.646 433.802 290.198 429.796C287.764 425.809 286 421.43 286 417.037C286 408.301 292.702 401 301.231 401C306.005 401 310.225 403.304 313 406.857C315.775 403.304 319.992 401 324.769 401C328.812 401 332.662 402.231 335.514 404.981C338.38 407.747 340 411.822 340 417.037C340 421.43 338.239 425.812 335.802 429.796C333.354 433.802 330.122 437.578 326.943 440.809C323.32 444.473 319.436 447.87 315.321 450.973C314.968 451.239 314.696 451.441 314.504 451.579L314.282 451.739L314.224 451.781C313.873 452.029 313.429 452.179 312.999 452.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter1_dddddd_3049_312)">
                    <path d="M284.999 377.179C284.569 377.179 284.149 377.046 283.798 376.797L283.776 376.781L283.718 376.739L283.496 376.579C279.078 373.315 274.919 369.716 271.057 365.812C267.878 362.578 264.646 358.802 262.198 354.796C259.764 350.809 258 346.43 258 342.037C258 333.301 264.702 326 273.231 326C278.005 326 282.225 328.304 285 331.857C287.775 328.304 291.992 326 296.769 326C300.812 326 304.662 327.231 307.514 329.981C310.38 332.747 312 336.822 312 342.037C312 346.43 310.239 350.812 307.802 354.796C305.354 358.802 302.122 362.578 298.943 365.809C295.32 369.473 291.436 372.87 287.321 375.973C286.968 376.239 286.696 376.441 286.504 376.579L286.282 376.739L286.224 376.781C285.873 377.029 285.429 377.179 284.999 377.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter2_dddddd_3049_312)">
                    <path d="M52.9986 403.179C52.5686 403.179 52.1491 403.046 51.7982 402.797L51.776 402.781L51.7178 402.739L51.4963 402.579C47.0783 399.315 42.9195 395.716 39.0569 391.812C35.8778 388.578 32.6462 384.802 30.1982 380.796C27.764 376.809 26 372.43 26 368.037C26 359.301 32.7015 352 41.2308 352C46.0049 352 50.2252 354.304 53 357.857C55.7748 354.304 59.9923 352 64.7692 352C68.8123 352 72.6615 353.231 75.5138 355.981C78.38 358.747 80 362.822 80 368.037C80 372.43 78.2388 376.812 75.8018 380.796C73.3538 384.802 70.1222 388.578 66.9431 391.809C63.32 395.473 59.4357 398.87 55.3206 401.973C54.968 402.239 54.6957 402.441 54.5037 402.579L54.2822 402.739L54.224 402.781C53.8731 403.029 53.4287 403.179 52.9986 403.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter3_dddddd_3049_312)">
                    <path d="M108.999 266.179C108.569 266.179 108.149 266.046 107.798 265.797L107.776 265.781L107.718 265.739L107.496 265.579C103.078 262.315 98.9195 258.716 95.0569 254.812C91.8778 251.578 88.6462 247.802 86.1982 243.796C83.764 239.809 82 235.43 82 231.037C82 222.301 88.7015 215 97.2308 215C102.005 215 106.225 217.304 109 220.857C111.775 217.304 115.992 215 120.769 215C124.812 215 128.662 216.231 131.514 218.981C134.38 221.747 136 225.822 136 231.037C136 235.43 134.239 239.812 131.802 243.796C129.354 247.802 126.122 251.578 122.943 254.809C119.32 258.473 115.436 261.87 111.321 264.973C110.968 265.239 110.696 265.441 110.504 265.579L110.282 265.739L110.224 265.781C109.873 266.029 109.429 266.179 108.999 266.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter4_dddddd_3049_312)">
                    <path d="M161.999 218.179C161.569 218.179 161.149 218.046 160.798 217.797L160.776 217.781L160.718 217.739L160.496 217.579C156.078 214.315 151.919 210.716 148.057 206.812C144.878 203.578 141.646 199.802 139.198 195.796C136.764 191.809 135 187.43 135 183.037C135 174.301 141.702 167 150.231 167C155.005 167 159.225 169.304 162 172.857C164.775 169.304 168.992 167 173.769 167C177.812 167 181.662 168.231 184.514 170.981C187.38 173.747 189 177.822 189 183.037C189 187.43 187.239 191.812 184.802 195.796C182.354 199.802 179.122 203.578 175.943 206.809C172.32 210.473 168.436 213.87 164.321 216.973C163.968 217.239 163.696 217.441 163.504 217.579L163.282 217.739L163.224 217.781C162.873 218.029 162.429 218.179 161.999 218.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter5_dddddd_3049_312)">
                    <path d="M40.9986 262.179C40.5686 262.179 40.1491 262.046 39.7982 261.797L39.776 261.781L39.7178 261.739L39.4963 261.579C35.0783 258.315 30.9195 254.716 27.0569 250.812C23.8778 247.578 20.6462 243.802 18.1982 239.796C15.764 235.809 14 231.43 14 227.037C14 218.301 20.7015 211 29.2308 211C34.0049 211 38.2252 213.304 41 216.857C43.7748 213.304 47.9923 211 52.7692 211C56.8123 211 60.6615 212.231 63.5138 214.981C66.38 217.747 68 221.822 68 227.037C68 231.43 66.2388 235.812 63.8018 239.796C61.3538 243.802 58.1222 247.578 54.9431 250.809C51.32 254.473 47.4357 257.87 43.3206 260.973C42.968 261.239 42.6957 261.441 42.5037 261.579L42.2822 261.739L42.224 261.781C41.8731 262.029 41.4287 262.179 40.9986 262.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter6_dddddd_3049_312)">
                    <path d="M268.999 276.179C268.569 276.179 268.149 276.046 267.798 275.797L267.776 275.781L267.718 275.739L267.496 275.579C263.078 272.315 258.919 268.716 255.057 264.812C251.878 261.578 248.646 257.802 246.198 253.796C243.764 249.809 242 245.43 242 241.037C242 232.301 248.702 225 257.231 225C262.005 225 266.225 227.304 269 230.857C271.775 227.304 275.992 225 280.769 225C284.812 225 288.662 226.231 291.514 228.981C294.38 231.747 296 235.822 296 241.037C296 245.43 294.239 249.812 291.802 253.796C289.354 257.802 286.122 261.578 282.943 264.809C279.32 268.473 275.436 271.87 271.321 274.973C270.968 275.239 270.696 275.441 270.504 275.579L270.282 275.739L270.224 275.781C269.873 276.029 269.429 276.179 268.999 276.179Z" fill="#FFFCC6" />
                    </g>
                    <g opacity="0.62" filter="url(#filter7_dddddd_3049_312)">
                    <path d="M106.999 440.179C106.569 440.179 106.149 440.046 105.798 439.797L105.776 439.781L105.718 439.739L105.496 439.579C101.078 436.315 96.9195 432.716 93.0569 428.812C89.8778 425.578 86.6462 421.802 84.1982 417.796C81.764 413.809 80 409.43 80 405.037C80 396.301 86.7015 389 95.2308 389C100.005 389 104.225 391.304 107 394.857C109.775 391.304 113.992 389 118.769 389C122.812 389 126.662 390.231 129.514 392.981C132.38 395.747 134 399.822 134 405.037C134 409.43 132.239 413.812 129.802 417.796C127.354 421.802 124.122 425.578 120.943 428.809C117.32 432.473 113.436 435.87 109.321 438.973C108.968 439.239 108.696 439.441 108.504 439.579L108.282 439.739L108.224 439.781C107.873 440.029 107.429 440.179 106.999 440.179Z" fill="#FFFCC6" />
                    </g>
                </ShiningGroup>
        )}
        <path d="M41.6514 263.612C41.2948 263.864 40.8686 264 40.4317 264C39.9947 264 39.5685 263.864 39.2119 263.612L39.1894 263.595L39.1304 263.553L38.9053 263.39C34.4164 260.074 30.1908 256.417 26.2664 252.45C23.0363 249.165 19.7528 245.328 17.2655 241.258C14.7923 237.207 13 232.758 13 228.294C13 219.418 19.809 212 28.4751 212C33.3258 212 37.6138 214.341 40.4331 217.95C43.2523 214.341 47.5375 212 52.3911 212C56.499 212 60.41 213.251 63.308 216.045C66.2202 218.856 67.8661 222.996 67.8661 228.294C67.8661 232.758 66.0767 237.21 63.6007 241.258C61.1134 245.328 57.8299 249.165 54.5998 252.448C50.9186 256.171 46.972 259.622 42.7909 262.775C42.4326 263.044 42.156 263.25 41.9609 263.39L41.7358 263.553L41.6767 263.595L41.6542 263.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.PSB)} fill={`url(#heart-${opened.includes('psb') ? 'psb' : 'empty'}-fill)`} stroke-width="0.565217" />
        <path d="M110.651 266.612C110.295 266.864 109.869 267 109.432 267C108.995 267 108.569 266.864 108.212 266.612L108.189 266.595L108.13 266.553L107.905 266.39C103.416 263.074 99.1908 259.417 95.2664 255.45C92.0363 252.165 88.7528 248.328 86.2655 244.258C83.7923 240.207 82 235.758 82 231.294C82 222.418 88.809 215 97.4751 215C102.326 215 106.614 217.341 109.433 220.95C112.252 217.341 116.538 215 121.391 215C125.499 215 129.41 216.251 132.308 219.045C135.22 221.856 136.866 225.996 136.866 231.294C136.866 235.758 135.077 240.21 132.601 244.258C130.113 248.328 126.83 252.165 123.6 255.448C119.919 259.171 115.972 262.622 111.791 265.775C111.433 266.044 111.156 266.25 110.961 266.39L110.736 266.553L110.677 266.595L110.654 266.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.OTP)} fill={`url(#heart-${opened.includes('otp') ? 'otp' : 'empty'}-fill)`} stroke-width="0.565217" />
        <path d="M164.651 216.612C164.295 216.864 163.869 217 163.432 217C162.995 217 162.569 216.864 162.212 216.612L162.189 216.595L162.13 216.553L161.905 216.39C157.416 213.074 153.191 209.417 149.266 205.45C146.036 202.165 142.753 198.328 140.265 194.258C137.792 190.207 136 185.758 136 181.294C136 172.418 142.809 165 151.475 165C156.326 165 160.614 167.341 163.433 170.95C166.252 167.341 170.538 165 175.391 165C179.499 165 183.41 166.251 186.308 169.045C189.22 171.856 190.866 175.996 190.866 181.294C190.866 185.758 189.077 190.21 186.601 194.258C184.113 198.328 180.83 202.165 177.6 205.448C173.919 209.171 169.972 212.622 165.791 215.775C165.433 216.044 165.156 216.25 164.961 216.39L164.736 216.553L164.677 216.595L164.654 216.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.YA)} fill={`url(#heart-${opened.includes('yandex') ? 'yandex' : 'empty'}-fill)`} stroke-width="0.565217"/>
        <path d="M270.651 273.612C270.295 273.864 269.869 274 269.432 274C268.995 274 268.569 273.864 268.212 273.612L268.189 273.595L268.13 273.553L267.905 273.39C263.416 270.074 259.191 266.417 255.266 262.45C252.036 259.165 248.753 255.328 246.265 251.258C243.792 247.207 242 242.758 242 238.294C242 229.418 248.809 222 257.475 222C262.326 222 266.614 224.341 269.433 227.95C272.252 224.341 276.538 222 281.391 222C285.499 222 289.41 223.251 292.308 226.045C295.22 228.856 296.866 232.996 296.866 238.294C296.866 242.758 295.077 247.21 292.601 251.258C290.113 255.328 286.83 259.165 283.6 262.448C279.919 266.171 275.972 269.622 271.791 272.775C271.433 273.044 271.156 273.25 270.961 273.39L270.736 273.553L270.677 273.595L270.654 273.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.LEMANA)} fill={`url(#heart-${opened.includes('lemana') ? 'lemana' : 'empty'}-fill)`} stroke-width="0.565217"/>
        <path d="M286.651 378.612C286.295 378.864 285.869 379 285.432 379C284.995 379 284.569 378.864 284.212 378.612L284.189 378.595L284.13 378.553L283.905 378.39C279.416 375.074 275.191 371.417 271.266 367.45C268.036 364.165 264.753 360.328 262.265 356.258C259.792 352.207 258 347.758 258 343.294C258 334.418 264.809 327 273.475 327C278.326 327 282.614 329.341 285.433 332.95C288.252 329.341 292.538 327 297.391 327C301.499 327 305.41 328.251 308.308 331.045C311.22 333.856 312.866 337.996 312.866 343.294C312.866 347.758 311.077 352.21 308.601 356.258C306.113 360.328 302.83 364.165 299.6 367.448C295.919 371.171 291.972 374.622 287.791 377.775C287.433 378.044 287.156 378.25 286.961 378.39L286.736 378.553L286.677 378.595L286.654 378.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.VTB)} fill={`url(#heart-${opened.includes('vtb') ? 'vtb' : 'empty'}-fill)`} stroke-width="0.565217"/>
        <path d="M314.651 449.612C314.295 449.864 313.869 450 313.432 450C312.995 450 312.569 449.864 312.212 449.612L312.189 449.595L312.13 449.553L311.905 449.39C307.416 446.074 303.191 442.417 299.266 438.45C296.036 435.165 292.753 431.328 290.265 427.258C287.792 423.207 286 418.758 286 414.294C286 405.418 292.809 398 301.475 398C306.326 398 310.614 400.341 313.433 403.95C316.252 400.341 320.538 398 325.391 398C329.499 398 333.41 399.251 336.308 402.045C339.22 404.856 340.866 408.996 340.866 414.294C340.866 418.758 339.077 423.21 336.601 427.258C334.113 431.328 330.83 435.165 327.6 438.448C323.919 442.171 319.972 445.622 315.791 448.775C315.433 449.044 315.156 449.25 314.961 449.39L314.736 449.553L314.677 449.595L314.654 449.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.AVITO)} fill={`url(#heart-${opened.includes('avito') ? 'avito' : 'empty'}-fill)`} stroke-width="0.565217"/>
        <path d="M108.651 439.612C108.295 439.864 107.869 440 107.432 440C106.995 440 106.569 439.864 106.212 439.612L106.189 439.595L106.13 439.553L105.905 439.39C101.416 436.074 97.1908 432.417 93.2664 428.45C90.0363 425.165 86.7528 421.328 84.2655 417.258C81.7923 413.207 80 408.758 80 404.294C80 395.418 86.809 388 95.4751 388C100.326 388 104.614 390.341 107.433 393.95C110.252 390.341 114.538 388 119.391 388C123.499 388 127.41 389.251 130.308 392.045C133.22 394.856 134.866 398.996 134.866 404.294C134.866 408.758 133.077 413.21 130.601 417.258C128.113 421.328 124.83 425.165 121.6 428.448C117.919 432.171 113.972 435.622 109.791 438.775C109.433 439.044 109.156 439.25 108.961 439.39L108.736 439.553L108.677 439.595L108.654 439.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.ALFA)} fill={`url(#heart-${opened.includes('alfa') ? 'alfa' : 'empty'}-fill)`} stroke-width="0.565217"/>
        <path d="M54.6514 403.612C54.2948 403.864 53.8686 404 53.4317 404C52.9947 404 52.5685 403.864 52.2119 403.612L52.1894 403.595L52.1304 403.553L51.9053 403.39C47.4164 400.074 43.1908 396.417 39.2664 392.45C36.0363 389.165 32.7528 385.328 30.2655 381.258C27.7923 377.207 26 372.758 26 368.294C26 359.418 32.809 352 41.4751 352C46.3258 352 50.6138 354.341 53.4331 357.95C56.2523 354.341 60.5375 352 65.3911 352C69.499 352 73.41 353.251 76.308 356.045C79.2202 358.856 80.8661 362.996 80.8661 368.294C80.8661 372.758 79.0767 377.21 76.6007 381.258C74.1134 385.328 70.8299 389.165 67.5998 392.448C63.9186 396.171 59.972 399.622 55.7909 402.775C55.4326 403.044 55.156 403.25 54.9609 403.39L54.7358 403.553L54.6767 403.595L54.6542 403.612" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.FT)} fill={`url(#heart-${opened.includes('ft') ? 'ft' : 'empty'}-fill)`}stroke-width="0.565217"/>
        <defs>
            <filter id="filter0_dddddd_3049_312" x="250.075" y="365.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter1_dddddd_3049_312" x="222.075" y="290.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter2_dddddd_3049_312" x="-9.92499" y="316.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter3_dddddd_3049_312" x="46.075" y="179.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter4_dddddd_3049_312" x="99.075" y="131.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter5_dddddd_3049_312" x="-21.925" y="175.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter6_dddddd_3049_312" x="206.075" y="189.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>
            <filter id="filter7_dddddd_3049_312" x="44.075" y="353.075" width="125.85" height="123.029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.427678"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.855357"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_3049_312" result="effect2_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2.99375"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_3049_312" result="effect3_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5.9875"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_3049_312" result="effect4_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10.2643"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect4_dropShadow_3049_312" result="effect5_dropShadow_3049_312"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="17.9625"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0"/>
            <feBlend mode="normal" in2="effect5_dropShadow_3049_312" result="effect6_dropShadow_3049_312"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3049_312" result="shape"/>
            </filter>

            <pattern id="heart-empty-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={heartEmpty}/>
            </pattern>
            <pattern id="heart-alfa-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={alfa}/>
            </pattern>
            <pattern id="heart-avito-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={avito}/>
            </pattern>
            <pattern id="heart-ft-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={ft}/>
            </pattern>
            <pattern id="heart-lemana-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={lemana}/>
            </pattern>
            <pattern id="heart-otp-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={otp}/>
            </pattern>
            <pattern id="heart-psb-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={psb}/>
            </pattern>
            <pattern id="heart-vtb-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={vtb}/>
            </pattern>
            <pattern id="heart-yandex-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={yandex}/>
            </pattern>
        </defs>
    </svg>
)