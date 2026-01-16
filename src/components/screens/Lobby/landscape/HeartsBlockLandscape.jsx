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


const Clickable = styled.path`
    cursor: pointer;
`;

export const HeartsBlockLandscape = ({onClick, opened = [], ...props}) => (
    <svg {...props} width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        {opened.length === companiesLength && (
                <ShiningGroup >
                    
                </ShiningGroup>
        )}
       
        <Clickable d="M589.168 785.076C588.659 785.436 588.051 785.629 587.427 785.629C586.804 785.629 586.195 785.436 585.686 785.076L585.654 785.052L585.57 784.992L585.249 784.759C578.842 780.026 572.81 774.806 567.209 769.145C562.598 764.455 557.912 758.978 554.362 753.169C550.832 747.388 548.273 741.037 548.273 734.666C548.273 721.996 557.992 711.409 570.361 711.409C577.285 711.409 583.405 714.751 587.429 719.902C591.453 714.751 597.57 711.409 604.497 711.409C610.361 711.409 615.943 713.194 620.079 717.182C624.236 721.194 626.585 727.103 626.585 734.666C626.585 741.037 624.031 747.392 620.497 753.169C616.947 758.978 612.26 764.455 607.65 769.141C602.396 774.454 596.762 779.381 590.795 783.88C590.283 784.266 589.888 784.558 589.61 784.759L589.289 784.992L589.204 785.052L589.172 785.076" onClick={() => onClick(SCREEN_NAMES.ALFA)} stroke="#4B1308" fill={`url(#heart-${opened.includes('alfa') ? 'alfa' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M880.62 486.384C880.111 486.744 879.503 486.938 878.879 486.938C878.256 486.938 877.647 486.744 877.139 486.384L877.106 486.36L877.022 486.3L876.701 486.067C870.294 481.334 864.262 476.114 858.661 470.453C854.051 465.763 849.364 460.286 845.814 454.477C842.284 448.696 839.726 442.345 839.726 435.974C839.726 423.304 849.444 412.717 861.814 412.717C868.737 412.717 874.857 416.059 878.881 421.21C882.905 416.059 889.022 412.717 895.949 412.717C901.813 412.717 907.395 414.502 911.531 418.49C915.688 422.502 918.037 428.412 918.037 435.974C918.037 442.345 915.483 448.7 911.949 454.477C908.399 460.286 903.712 465.763 899.102 470.449C893.848 475.763 888.215 480.689 882.247 485.188C881.735 485.574 881.341 485.867 881.062 486.067L880.741 486.3L880.657 486.36L880.624 486.384" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.LEMANA)} fill={`url(#heart-${opened.includes('lemana') ? 'lemana' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M962.083 803.182C961.574 803.542 960.966 803.736 960.342 803.736C959.719 803.736 959.11 803.542 958.601 803.182L958.569 803.158L958.485 803.098L958.164 802.865C951.757 798.133 945.725 792.912 940.124 787.251C935.513 782.561 930.827 777.084 927.277 771.275C923.747 765.494 921.188 759.143 921.188 752.772C921.188 740.102 930.907 729.515 943.276 729.515C950.2 729.515 956.32 732.857 960.344 738.008C964.368 732.857 970.485 729.515 977.412 729.515C983.276 729.515 988.858 731.3 992.994 735.288C997.151 739.3 999.5 745.21 999.5 752.772C999.5 759.143 996.946 765.498 993.412 771.275C989.862 777.084 985.175 782.561 980.565 787.247C975.311 792.561 969.677 797.487 963.71 801.987C963.198 802.372 962.803 802.665 962.525 802.865L962.204 803.098L962.119 803.158L962.087 803.182" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.AVITO)} fill={`url(#heart-${opened.includes('avito') ? 'avito' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M909.584 669.219C909.075 669.579 908.467 669.773 907.843 669.773C907.22 669.773 906.611 669.579 906.102 669.219L906.07 669.195L905.986 669.135L905.665 668.902C899.258 664.169 893.226 658.949 887.625 653.288C883.014 648.598 878.328 643.121 874.778 637.312C871.248 631.531 868.689 625.18 868.689 618.809C868.689 606.139 878.408 595.552 890.777 595.552C897.701 595.552 903.821 598.894 907.845 604.045C911.869 598.894 917.986 595.552 924.913 595.552C930.777 595.552 936.359 597.337 940.495 601.325C944.652 605.337 947.001 611.246 947.001 618.809C947.001 625.18 944.447 631.535 940.913 637.312C937.363 643.121 932.676 648.598 928.066 653.284C922.812 658.598 917.178 663.524 911.211 668.023C910.699 668.409 910.304 668.701 910.026 668.902L909.705 669.135L909.62 669.195L909.588 669.219" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.VTB)} fill={`url(#heart-${opened.includes('vtb') ? 'vtb' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M589.895 469.667C589.386 470.027 588.778 470.221 588.154 470.221C587.53 470.221 586.922 470.027 586.413 469.667L586.381 469.643L586.296 469.583L585.975 469.35C579.568 464.618 573.537 459.397 567.935 453.736C563.325 449.046 558.638 443.57 555.088 437.76C551.558 431.979 549 425.628 549 419.257C549 406.588 558.719 396 571.088 396C578.011 396 584.132 399.342 588.156 404.493C592.18 399.342 598.296 396 605.224 396C611.087 396 616.669 397.785 620.806 401.773C624.962 405.785 627.312 411.695 627.312 419.257C627.312 425.628 624.758 431.983 621.223 437.76C617.673 443.57 612.987 449.046 608.376 453.732C603.122 459.046 597.489 463.972 591.521 468.472C591.01 468.857 590.615 469.15 590.337 469.35L590.015 469.583L589.931 469.643L589.899 469.667" stroke="#4B1308" fill={`url(#heart-${opened.includes('otp') ? 'otp' : 'empty'}-fill)`} onClick={() => onClick(SCREEN_NAMES.OTP)}  stroke-width="0.806748"/>
        <Clickable d="M467.88 439.315C467.371 439.675 466.763 439.868 466.139 439.868C465.516 439.868 464.907 439.675 464.398 439.315L464.366 439.291L464.282 439.23L463.961 438.998C457.553 434.265 451.522 429.045 445.921 423.383C441.31 418.693 436.624 413.217 433.074 407.408C429.544 401.627 426.985 395.276 426.985 388.905C426.985 376.235 436.704 365.647 449.073 365.647C455.997 365.647 462.117 368.989 466.141 374.141C470.165 368.989 476.282 365.647 483.209 365.647C489.072 365.647 494.655 367.433 498.791 371.421C502.948 375.433 505.297 381.342 505.297 388.905C505.297 395.276 502.743 401.631 499.209 407.408C495.659 413.217 490.972 418.693 486.362 423.379C481.107 428.693 475.474 433.619 469.507 438.119C468.995 438.504 468.6 438.797 468.322 438.998L468.001 439.23L467.916 439.291L467.884 439.315" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.PSB)}  fill={`url(#heart-${opened.includes('psb') ? 'psb' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M688.732 375.957C688.223 376.317 687.614 376.51 686.991 376.51C686.367 376.51 685.759 376.317 685.25 375.957L685.218 375.932L685.133 375.872L684.812 375.64C678.405 370.907 672.374 365.687 666.772 360.025C662.162 355.335 657.475 349.859 653.925 344.05C650.395 338.268 647.837 331.917 647.837 325.547C647.837 312.877 657.556 302.289 669.925 302.289C676.848 302.289 682.969 305.631 686.993 310.783C691.017 305.631 697.133 302.289 704.061 302.289C709.924 302.289 715.506 304.075 719.643 308.062C723.799 312.074 726.149 317.984 726.149 325.547C726.149 331.917 723.594 338.272 720.06 344.05C716.51 349.859 711.824 355.335 707.213 360.021C701.959 365.335 696.326 370.261 690.358 374.761C689.847 375.146 689.452 375.439 689.173 375.64L688.852 375.872L688.768 375.932L688.736 375.957" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.YA)}  fill={`url(#heart-${opened.includes('yandex') ? 'yandex' : 'empty'}-fill)`} stroke-width="0.806748"/>
        <Clickable d="M491.414 718.095C490.905 718.455 490.297 718.649 489.673 718.649C489.05 718.649 488.441 718.455 487.932 718.095L487.9 718.071L487.816 718.011L487.495 717.778C481.088 713.046 475.056 707.825 469.455 702.164C464.845 697.474 460.158 691.998 456.608 686.188C453.078 680.407 450.52 674.056 450.52 667.685C450.52 655.015 460.238 644.428 472.607 644.428C479.531 644.428 485.651 647.77 489.675 652.921C493.699 647.77 499.816 644.428 506.743 644.428C512.607 644.428 518.189 646.213 522.325 650.201C526.482 654.213 528.831 660.123 528.831 667.685C528.831 674.056 526.277 680.411 522.743 686.188C519.193 691.998 514.506 697.474 509.896 702.16C504.642 707.474 499.009 712.4 493.041 716.9C492.529 717.285 492.135 717.578 491.856 717.778L491.535 718.011L491.45 718.071L491.418 718.095" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.FT)} fill={`url(#heart-${opened.includes('ft') ? 'ft' : 'empty'}-fill)`} stroke-width="0.806748"/>

        <defs>
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
