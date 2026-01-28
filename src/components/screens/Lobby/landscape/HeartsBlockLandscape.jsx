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

export const HeartsBlockLandscape = ({ onClick, opened = [], ...props }) => (
    <svg {...props} width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        {opened.length === companiesLength && (
            <ShiningGroup >
                <g opacity="0.62" filter="url(#filter0_dddddd_3097_118)">
                    <path d="M586.998 783.03C586.393 783.03 585.802 782.842 585.309 782.493L585.277 782.469L585.195 782.411L584.884 782.185C578.666 777.592 572.813 772.526 567.376 767.032C562.902 762.48 558.354 757.165 554.909 751.528C551.483 745.917 549 739.754 549 733.571C549 721.275 558.432 711 570.436 711C577.155 711 583.095 714.243 587 719.243C590.905 714.243 596.841 711 603.564 711C609.254 711 614.672 712.733 618.686 716.603C622.72 720.496 625 726.231 625 733.571C625 739.754 622.521 745.921 619.091 751.528C615.646 757.165 611.098 762.48 606.624 767.028C601.524 772.185 596.058 776.965 590.266 781.332C589.77 781.706 589.387 781.99 589.116 782.185L588.805 782.411L588.723 782.469C588.229 782.819 587.603 783.03 586.998 783.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter1_dddddd_3097_118)">
                    <path d="M960.998 803.03C960.393 803.03 959.802 802.842 959.309 802.493L959.277 802.469L959.195 802.411L958.884 802.185C952.666 797.592 946.813 792.526 941.376 787.032C936.902 782.48 932.354 777.165 928.909 771.528C925.483 765.917 923 759.754 923 753.571C923 741.275 932.432 731 944.436 731C951.155 731 957.095 734.243 961 739.243C964.905 734.243 970.841 731 977.564 731C983.254 731 988.672 732.733 992.686 736.603C996.72 740.496 999 746.231 999 753.571C999 759.754 996.521 765.921 993.091 771.528C989.646 777.165 985.098 782.48 980.624 787.028C975.524 792.185 970.058 796.965 964.266 801.332C963.77 801.706 963.387 801.99 963.116 802.185L962.805 802.411L962.723 802.469C962.229 802.819 961.603 803.03 960.998 803.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter2_dddddd_3097_118)">
                    <path d="M907.998 669.03C907.393 669.03 906.802 668.842 906.309 668.493L906.277 668.469L906.195 668.411L905.884 668.185C899.666 663.592 893.813 658.526 888.376 653.032C883.902 648.48 879.354 643.165 875.909 637.528C872.483 631.917 870 625.754 870 619.571C870 607.275 879.432 597 891.436 597C898.155 597 904.095 600.243 908 605.243C911.905 600.243 917.841 597 924.564 597C930.254 597 935.672 598.733 939.686 602.603C943.72 606.496 946 612.231 946 619.571C946 625.754 943.521 631.921 940.091 637.528C936.646 643.165 932.098 648.48 927.624 653.028C922.524 658.185 917.058 662.965 911.266 667.332C910.77 667.706 910.387 667.99 910.116 668.185L909.805 668.411L909.723 668.469C909.229 668.819 908.603 669.03 907.998 669.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter3_dddddd_3097_118)">
                    <path d="M489.998 719.03C489.393 719.03 488.802 718.842 488.309 718.493L488.277 718.469L488.195 718.411L487.884 718.185C481.666 713.592 475.813 708.526 470.376 703.032C465.902 698.48 461.354 693.165 457.909 687.528C454.483 681.917 452 675.754 452 669.571C452 657.275 461.432 647 473.436 647C480.155 647 486.095 650.243 490 655.243C493.905 650.243 499.841 647 506.564 647C512.254 647 517.672 648.733 521.686 652.603C525.72 656.496 528 662.231 528 669.571C528 675.754 525.521 681.921 522.091 687.528C518.646 693.165 514.098 698.48 509.624 703.028C504.524 708.185 499.058 712.965 493.266 717.332C492.77 717.706 492.387 717.99 492.116 718.185L491.805 718.411L491.723 718.469C491.229 718.819 490.603 719.03 489.998 719.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter4_dddddd_3097_118)">
                    <path d="M465.998 440.03C465.393 440.03 464.802 439.842 464.309 439.493L464.277 439.469L464.195 439.411L463.884 439.185C457.666 434.592 451.813 429.526 446.376 424.032C441.902 419.48 437.354 414.165 433.909 408.528C430.483 402.917 428 396.754 428 390.571C428 378.275 437.432 368 449.436 368C456.155 368 462.095 371.243 466 376.243C469.905 371.243 475.841 368 482.564 368C488.254 368 493.672 369.733 497.686 373.603C501.72 377.496 504 383.231 504 390.571C504 396.754 501.521 402.921 498.091 408.528C494.646 414.165 490.098 419.48 485.624 424.028C480.524 429.185 475.058 433.965 469.266 438.332C468.77 438.706 468.387 438.99 468.116 439.185L467.805 439.411L467.723 439.469C467.229 439.819 466.603 440.03 465.998 440.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter5_dddddd_3097_118)">
                    <path d="M587.998 470.03C587.393 470.03 586.802 469.842 586.309 469.493L586.277 469.469L586.195 469.411L585.884 469.185C579.666 464.592 573.813 459.526 568.376 454.032C563.902 449.48 559.354 444.165 555.909 438.528C552.483 432.917 550 426.754 550 420.571C550 408.275 559.432 398 571.436 398C578.155 398 584.095 401.243 588 406.243C591.905 401.243 597.841 398 604.564 398C610.254 398 615.672 399.733 619.686 403.603C623.72 407.496 626 413.231 626 420.571C626 426.754 623.521 432.921 620.091 438.528C616.646 444.165 612.098 449.48 607.624 454.028C602.524 459.185 597.058 463.965 591.266 468.332C590.77 468.706 590.387 468.99 590.116 469.185L589.805 469.411L589.723 469.469C589.229 469.819 588.603 470.03 587.998 470.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter6_dddddd_3097_118)">
                    <path d="M687.998 375.03C687.393 375.03 686.802 374.842 686.309 374.493L686.277 374.469L686.195 374.411L685.884 374.185C679.666 369.592 673.813 364.526 668.376 359.032C663.902 354.48 659.354 349.165 655.909 343.528C652.483 337.917 650 331.754 650 325.571C650 313.275 659.432 303 671.436 303C678.155 303 684.095 306.243 688 311.243C691.905 306.243 697.841 303 704.564 303C710.254 303 715.672 304.733 719.686 308.603C723.72 312.496 726 318.231 726 325.571C726 331.754 723.521 337.921 720.091 343.528C716.646 349.165 712.098 354.48 707.624 359.028C702.524 364.185 697.058 368.965 691.266 373.332C690.77 373.706 690.387 373.99 690.116 374.185L689.805 374.411L689.723 374.469C689.229 374.819 688.603 375.03 687.998 375.03Z" fill="#FFFCC6" />
                </g>
                <g opacity="0.62" filter="url(#filter7_dddddd_3097_118)">
                    <path d="M879.998 487.03C879.393 487.03 878.802 486.842 878.309 486.493L878.277 486.469L878.195 486.411L877.884 486.185C871.666 481.592 865.813 476.526 860.376 471.032C855.902 466.48 851.354 461.165 847.909 455.528C844.483 449.917 842 443.754 842 437.571C842 425.275 851.432 415 863.436 415C870.155 415 876.095 418.243 880 423.243C883.905 418.243 889.841 415 896.564 415C902.254 415 907.672 416.733 911.686 420.603C915.72 424.496 918 430.231 918 437.571C918 443.754 915.521 449.921 912.091 455.528C908.646 461.165 904.098 466.48 899.624 471.028C894.524 476.185 889.058 480.965 883.266 485.332C882.77 485.706 882.387 485.99 882.116 486.185L881.805 486.411L881.723 486.469C881.229 486.819 880.603 487.03 879.998 487.03Z" fill="#FFFCC6" />
                </g>

            </ShiningGroup>
        )}

        <Clickable d="M589.168 785.076C588.659 785.436 588.051 785.629 587.427 785.629C586.804 785.629 586.195 785.436 585.686 785.076L585.654 785.052L585.57 784.992L585.249 784.759C578.842 780.026 572.81 774.806 567.209 769.145C562.598 764.455 557.912 758.978 554.362 753.169C550.832 747.388 548.273 741.037 548.273 734.666C548.273 721.996 557.992 711.409 570.361 711.409C577.285 711.409 583.405 714.751 587.429 719.902C591.453 714.751 597.57 711.409 604.497 711.409C610.361 711.409 615.943 713.194 620.079 717.182C624.236 721.194 626.585 727.103 626.585 734.666C626.585 741.037 624.031 747.392 620.497 753.169C616.947 758.978 612.26 764.455 607.65 769.141C602.396 774.454 596.762 779.381 590.795 783.88C590.283 784.266 589.888 784.558 589.61 784.759L589.289 784.992L589.204 785.052L589.172 785.076" onClick={() => onClick(SCREEN_NAMES.ALFA)} stroke="#4B1308" fill={`url(#heart-${opened.includes('alfa') ? 'alfa' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M880.62 486.384C880.111 486.744 879.503 486.938 878.879 486.938C878.256 486.938 877.647 486.744 877.139 486.384L877.106 486.36L877.022 486.3L876.701 486.067C870.294 481.334 864.262 476.114 858.661 470.453C854.051 465.763 849.364 460.286 845.814 454.477C842.284 448.696 839.726 442.345 839.726 435.974C839.726 423.304 849.444 412.717 861.814 412.717C868.737 412.717 874.857 416.059 878.881 421.21C882.905 416.059 889.022 412.717 895.949 412.717C901.813 412.717 907.395 414.502 911.531 418.49C915.688 422.502 918.037 428.412 918.037 435.974C918.037 442.345 915.483 448.7 911.949 454.477C908.399 460.286 903.712 465.763 899.102 470.449C893.848 475.763 888.215 480.689 882.247 485.188C881.735 485.574 881.341 485.867 881.062 486.067L880.741 486.3L880.657 486.36L880.624 486.384" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.LEMANA)} fill={`url(#heart-${opened.includes('lemana') ? 'lemana' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M962.083 803.182C961.574 803.542 960.966 803.736 960.342 803.736C959.719 803.736 959.11 803.542 958.601 803.182L958.569 803.158L958.485 803.098L958.164 802.865C951.757 798.133 945.725 792.912 940.124 787.251C935.513 782.561 930.827 777.084 927.277 771.275C923.747 765.494 921.188 759.143 921.188 752.772C921.188 740.102 930.907 729.515 943.276 729.515C950.2 729.515 956.32 732.857 960.344 738.008C964.368 732.857 970.485 729.515 977.412 729.515C983.276 729.515 988.858 731.3 992.994 735.288C997.151 739.3 999.5 745.21 999.5 752.772C999.5 759.143 996.946 765.498 993.412 771.275C989.862 777.084 985.175 782.561 980.565 787.247C975.311 792.561 969.677 797.487 963.71 801.987C963.198 802.372 962.803 802.665 962.525 802.865L962.204 803.098L962.119 803.158L962.087 803.182" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.AVITO)} fill={`url(#heart-${opened.includes('avito') ? 'avito' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M909.584 669.219C909.075 669.579 908.467 669.773 907.843 669.773C907.22 669.773 906.611 669.579 906.102 669.219L906.07 669.195L905.986 669.135L905.665 668.902C899.258 664.169 893.226 658.949 887.625 653.288C883.014 648.598 878.328 643.121 874.778 637.312C871.248 631.531 868.689 625.18 868.689 618.809C868.689 606.139 878.408 595.552 890.777 595.552C897.701 595.552 903.821 598.894 907.845 604.045C911.869 598.894 917.986 595.552 924.913 595.552C930.777 595.552 936.359 597.337 940.495 601.325C944.652 605.337 947.001 611.246 947.001 618.809C947.001 625.18 944.447 631.535 940.913 637.312C937.363 643.121 932.676 648.598 928.066 653.284C922.812 658.598 917.178 663.524 911.211 668.023C910.699 668.409 910.304 668.701 910.026 668.902L909.705 669.135L909.62 669.195L909.588 669.219" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.VTB)} fill={`url(#heart-${opened.includes('vtb') ? 'vtb' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M589.895 469.667C589.386 470.027 588.778 470.221 588.154 470.221C587.53 470.221 586.922 470.027 586.413 469.667L586.381 469.643L586.296 469.583L585.975 469.35C579.568 464.618 573.537 459.397 567.935 453.736C563.325 449.046 558.638 443.57 555.088 437.76C551.558 431.979 549 425.628 549 419.257C549 406.588 558.719 396 571.088 396C578.011 396 584.132 399.342 588.156 404.493C592.18 399.342 598.296 396 605.224 396C611.087 396 616.669 397.785 620.806 401.773C624.962 405.785 627.312 411.695 627.312 419.257C627.312 425.628 624.758 431.983 621.223 437.76C617.673 443.57 612.987 449.046 608.376 453.732C603.122 459.046 597.489 463.972 591.521 468.472C591.01 468.857 590.615 469.15 590.337 469.35L590.015 469.583L589.931 469.643L589.899 469.667" stroke="#4B1308" fill={`url(#heart-${opened.includes('otp') ? 'otp' : 'empty'}-fill)`} onClick={() => onClick(SCREEN_NAMES.OTP)} strokeWidth="0.806748" />
        <Clickable d="M467.88 439.315C467.371 439.675 466.763 439.868 466.139 439.868C465.516 439.868 464.907 439.675 464.398 439.315L464.366 439.291L464.282 439.23L463.961 438.998C457.553 434.265 451.522 429.045 445.921 423.383C441.31 418.693 436.624 413.217 433.074 407.408C429.544 401.627 426.985 395.276 426.985 388.905C426.985 376.235 436.704 365.647 449.073 365.647C455.997 365.647 462.117 368.989 466.141 374.141C470.165 368.989 476.282 365.647 483.209 365.647C489.072 365.647 494.655 367.433 498.791 371.421C502.948 375.433 505.297 381.342 505.297 388.905C505.297 395.276 502.743 401.631 499.209 407.408C495.659 413.217 490.972 418.693 486.362 423.379C481.107 428.693 475.474 433.619 469.507 438.119C468.995 438.504 468.6 438.797 468.322 438.998L468.001 439.23L467.916 439.291L467.884 439.315" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.PSB)} fill={`url(#heart-${opened.includes('psb') ? 'psb' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M688.732 375.957C688.223 376.317 687.614 376.51 686.991 376.51C686.367 376.51 685.759 376.317 685.25 375.957L685.218 375.932L685.133 375.872L684.812 375.64C678.405 370.907 672.374 365.687 666.772 360.025C662.162 355.335 657.475 349.859 653.925 344.05C650.395 338.268 647.837 331.917 647.837 325.547C647.837 312.877 657.556 302.289 669.925 302.289C676.848 302.289 682.969 305.631 686.993 310.783C691.017 305.631 697.133 302.289 704.061 302.289C709.924 302.289 715.506 304.075 719.643 308.062C723.799 312.074 726.149 317.984 726.149 325.547C726.149 331.917 723.594 338.272 720.06 344.05C716.51 349.859 711.824 355.335 707.213 360.021C701.959 365.335 696.326 370.261 690.358 374.761C689.847 375.146 689.452 375.439 689.173 375.64L688.852 375.872L688.768 375.932L688.736 375.957" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.YA)} fill={`url(#heart-${opened.includes('yandex') ? 'yandex' : 'empty'}-fill)`} strokeWidth="0.806748" />
        <Clickable d="M491.414 718.095C490.905 718.455 490.297 718.649 489.673 718.649C489.05 718.649 488.441 718.455 487.932 718.095L487.9 718.071L487.816 718.011L487.495 717.778C481.088 713.046 475.056 707.825 469.455 702.164C464.845 697.474 460.158 691.998 456.608 686.188C453.078 680.407 450.52 674.056 450.52 667.685C450.52 655.015 460.238 644.428 472.607 644.428C479.531 644.428 485.651 647.77 489.675 652.921C493.699 647.77 499.816 644.428 506.743 644.428C512.607 644.428 518.189 646.213 522.325 650.201C526.482 654.213 528.831 660.123 528.831 667.685C528.831 674.056 526.277 680.411 522.743 686.188C519.193 691.998 514.506 697.474 509.896 702.16C504.642 707.474 499.009 712.4 493.041 716.9C492.529 717.285 492.135 717.578 491.856 717.778L491.535 718.011L491.45 718.071L491.418 718.095" stroke="#4B1308" onClick={() => onClick(SCREEN_NAMES.FT)} fill={`url(#heart-${opened.includes('ft') ? 'ft' : 'empty'}-fill)`} strokeWidth="0.806748" />

        <defs>
            <pattern id="heart-empty-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={heartEmpty} />
            </pattern>
            <pattern id="heart-alfa-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={alfa} />
            </pattern>
            <pattern id="heart-avito-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={avito} />
            </pattern>
            <pattern id="heart-ft-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={ft} />
            </pattern>
            <pattern id="heart-lemana-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={lemana} />
            </pattern>
            <pattern id="heart-otp-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={otp} />
            </pattern>
            <pattern id="heart-psb-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={psb} />
            </pattern>
            <pattern id="heart-vtb-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={vtb} />
            </pattern>
            <pattern id="heart-yandex-fill" patternContentUnits="objectBoundingBox" width="1" height="1">
                <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" href={yandex} />
            </pattern>
            <filter id="filter0_dddddd_3097_118" x="498.439" y="660.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter1_dddddd_3097_118" x="872.439" y="680.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter2_dddddd_3097_118" x="819.439" y="546.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter3_dddddd_3097_118" x="401.439" y="596.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter4_dddddd_3097_118" x="377.439" y="317.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter5_dddddd_3097_118" x="499.439" y="347.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter6_dddddd_3097_118" x="599.439" y="252.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
            <filter id="filter7_dddddd_3097_118" x="791.439" y="364.439" width="177.122" height="173.152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.601918" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="1.20384" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_3097_118" result="effect2_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="4.21342" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_3097_118" result="effect3_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="8.42685" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_3097_118" result="effect4_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="14.446" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 0.776471 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect4_dropShadow_3097_118" result="effect5_dropShadow_3097_118" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="25.2805" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.988798 0 0 0 0 0.775961 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect5_dropShadow_3097_118" result="effect6_dropShadow_3097_118" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3097_118" result="shape" />
            </filter>
        </defs>
    </svg>
)
