import React, { useState } from "react";
import styles from "./Map.module.scss";
import classNames from "classnames";
import { Tooltip } from "react-tooltip";
import MapCard from "../MapCard/MapCard";
import companyLogoSvg from "../../../assets/svg/logo.svg";
const Region = ({ region, cardData, setCardData }) => {
  const [classDiv, setClassDiv] = useState("");
  const addClassDiv = () => {
    setClassDiv("active");
  };
  const removeClassDiv = () => {
    setClassDiv("");
  };
 
  return (
    <g
      onClick={() => {
        setCardData(region);
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Натисніть для відображення  інформації"
      className={classNames(
        styles.region,
        region.disabled && styles.regionDisabled
      )}
    >
      <path
        style={{ position: "relative", zIndex: "1" }}
        className="rel__path"
        d={region.d}
        fill={region?.fill}
        stroke="rgba(255, 255, 255, 0.3)"
      ></path>
  {region.office &&     <svg
        width="100"
        height="25"
        viewBox="0 0 53 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x={region.titleX}
        y={region.titleY}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.8759 0.582016C15.1212 1.84304 9.03598 5.75933 5.54719 10.4463C1.29491 16.1591 -0.0254103 20.2637 0.000368892 27.6853C0.0171254 32.4213 0.163208 33.5135 1.15184 36.2925C4.51259 45.741 11.7303 52.2957 21.0899 54.399C33.9872 57.2968 47.3198 49.4621 51.7805 36.3641C53.09 32.5185 53.4028 25.1793 52.4352 21.0131C49.1338 6.80338 34.8079 -2.47117 20.8759 0.582016ZM26.4051 4.67795V8.59207H30.0572C32.0658 8.59207 33.7092 8.48489 33.7092 8.35341C33.7092 8.22236 33.3977 7.49031 33.0166 6.72614C32.0426 4.77342 29.9102 2.58811 28.0163 1.6022L26.4051 0.763402V4.67795ZM22.9378 2.62543C21.9393 3.40131 20.5524 5.06069 19.8555 6.3139L18.5885 8.59207H22.0669H25.5458V4.9036C25.5458 2.87494 25.3675 1.21513 25.1497 1.21513C24.9314 1.21513 23.9364 1.84955 22.9378 2.62543ZM31.8488 3.72676C32.6991 4.85153 33.6946 6.40589 34.0611 7.18178C34.7146 8.5643 34.7829 8.59164 37.5482 8.57558L40.3689 8.55909L38.0672 6.39114C35.922 4.37029 33.8588 3.04765 31.347 2.08344C30.3794 1.71199 30.4164 1.83219 31.8488 3.72676ZM19.5457 2.76906C17.5822 3.62956 13.6612 6.63848 13.0837 7.72854C12.6506 8.54564 12.7632 8.59207 15.1779 8.59207H17.73L19.0112 6.29958C19.7154 5.03856 20.604 3.74542 20.9855 3.42604C21.706 2.822 21.9166 2.07042 21.3567 2.09993C21.1797 2.10948 20.3646 2.41063 19.5457 2.76906ZM36.2872 3.71635C37.1142 4.35337 38.5875 5.71073 39.5616 6.73308C41.0396 8.28528 41.6024 8.59207 42.9717 8.59207H44.6113L43.4727 7.39137C42.0166 5.85696 38.1463 3.48289 36.2502 2.96173L34.7834 2.5586L36.2872 3.71635ZM13.7072 4.46836C12.5385 5.06416 10.8087 6.22841 9.86349 7.0555L8.14488 8.55953L9.66198 8.57558C10.9561 8.58947 11.5546 8.20891 13.7304 5.98845C15.1336 4.55645 16.1803 3.38482 16.0569 3.38482C15.9336 3.38482 14.8763 3.87257 13.7072 4.46836ZM6.1298 10.8702C4.86275 12.5834 3.20386 15.319 3.20386 15.6948C3.20386 15.8458 4.1607 15.969 5.33022 15.969H7.45657L8.87486 13.0399C9.65511 11.4292 10.3576 9.96462 10.4362 9.7854C10.5153 9.60619 9.81322 9.45995 8.87615 9.45995C7.45485 9.45995 7.00028 9.69341 6.1298 10.8702ZM11.2483 10.2206C10.8736 10.6394 10.0736 12.0549 9.47122 13.3667L8.3756 15.752L11.8584 15.8788C13.7738 15.9486 15.4163 15.9295 15.5091 15.8362C15.6015 15.7429 15.9504 14.6117 16.2842 13.3224C16.6181 12.0336 17.0224 10.6368 17.1831 10.2193C17.4421 9.54413 17.1672 9.45995 14.7022 9.45995C12.606 9.45995 11.7638 9.64524 11.2483 10.2206ZM18.0909 9.78931C17.8791 10.1356 16.5231 15.253 16.5231 15.706C16.5231 15.8506 18.5532 15.969 21.0345 15.969H25.5458V12.7145V9.45995H21.9191C19.9242 9.45995 18.2018 9.60835 18.0909 9.78931ZM26.4051 12.7145V15.969H31.1863H35.9675L35.6856 14.1907C35.531 13.2126 35.1292 11.7481 34.7937 10.9362L34.1827 9.45995H30.2939H26.4051V12.7145ZM35.5976 10.849C35.7518 11.3979 36.0998 12.7744 36.3714 13.9078L36.8642 15.969H40.4428C43.0843 15.969 44.0209 15.8219 44.0209 15.4075C44.0209 15.0985 43.3915 13.7802 42.622 12.4784L41.223 10.1109L38.27 9.98111C35.3694 9.85396 35.3217 9.86959 35.5976 10.849ZM42.4007 10.2193C42.4939 10.3986 43.1217 11.7655 43.7958 13.2569L45.0207 15.969H47.3138C48.5748 15.969 49.6064 15.8618 49.6064 15.7303C49.6064 15.2556 48.1662 12.6824 47.1286 11.3042C46.21 10.084 45.8091 9.89389 44.149 9.89389C43.0937 9.89389 42.307 10.0401 42.4007 10.2193ZM1.82081 18.8981C0.723475 22.1578 0.558918 23.2908 0.567511 27.517C0.575245 31.3773 1.51619 36.434 2.43564 37.5574C3.0827 38.3485 49.7284 38.3485 50.3725 37.5574C50.9972 36.7902 52.0709 32.6743 52.382 29.855C52.6819 27.1355 52.0589 21.9404 51.0681 18.8981L50.3965 16.8369H26.4554H2.51427L1.82081 18.8981ZM3.20386 20.2971V22.0216L9.75607 22.1413L16.3083 22.2611L16.4295 27.3486L16.5502 32.4361L9.98465 32.5559L3.41869 32.6756L3.28679 34.5199L3.15445 36.3641H11.128H19.101V27.4684V18.5726H11.1524H3.20386V20.2971ZM20.8196 27.4684V36.3641H30.5113H40.2035L40.0711 34.5199L39.9392 32.6756L31.6546 32.5576L23.3705 32.44L23.4912 27.3503L23.6124 22.2611L28.446 22.1383L33.2796 22.0155V20.2941V18.5726H27.0496H20.8196V27.4684ZM35.4279 20.3084V22.0441H38.4354H41.443V29.2041V36.3641H42.9468H44.4506V29.2041V22.0441H47.2433H50.0361V20.3084V18.5726H42.732H35.4279V20.3084ZM8.37173 39.2932C8.37861 39.711 9.00676 41.2242 9.76811 42.6562L11.1524 45.2598L14.0526 45.3883C15.6475 45.4586 16.9528 45.393 16.9528 45.2425C16.9528 44.3138 15.3863 39.1291 15.0258 38.8657C14.786 38.6904 13.1877 38.5442 11.4747 38.5403C8.78721 38.5346 8.36142 38.6379 8.37173 39.2932ZM3.20386 39.3739C3.20386 39.5974 4.03782 41.0129 5.05739 42.5199C6.76311 45.0415 7.0484 45.2702 8.64155 45.39L10.3726 45.5202L8.82931 42.2708L7.28557 39.022L5.24472 38.9951C4.12203 38.9799 3.20386 39.1504 3.20386 39.3739ZM16.5089 40.378C16.6872 41.1535 17.0842 42.618 17.3906 43.6325L17.9483 45.4768H21.7468H25.5458V42.2222V38.9677H20.8648H16.1841L16.5089 40.378ZM26.4051 42.2222V45.4768H30.2548H34.1045L34.981 42.6106C35.4631 41.0341 35.8575 39.5696 35.8575 39.3561C35.8575 39.1426 33.7307 38.9677 31.1313 38.9677H26.4051V42.2222ZM36.2829 40.812C36.0259 41.8265 35.6315 43.2225 35.4068 43.9142C35.1821 44.6063 34.9982 45.2407 34.9982 45.3245C34.9982 45.4082 36.2524 45.4768 37.7849 45.4768C40.53 45.4768 40.5876 45.4525 41.6329 43.8495C42.2164 42.9547 42.9953 41.4902 43.3631 40.595L44.0325 38.9677H40.3912H36.7499L36.2829 40.812ZM43.3764 41.8651C42.6675 43.446 42.0192 44.9166 41.9358 45.1335C41.8525 45.3505 42.7225 45.4677 43.8693 45.3939C45.9062 45.2628 45.9965 45.196 47.7804 42.5082C48.7849 40.9951 49.6064 39.5791 49.6064 39.3622C49.6064 39.1452 48.4945 38.9729 47.1359 38.9794L44.6654 38.9911L43.3764 41.8651ZM8.89333 46.8871C9.14382 47.6608 13.0666 50.5916 14.5523 51.1149C15.6939 51.5172 15.5989 51.3306 13.4782 48.9995C11.7514 47.101 10.8392 46.4301 9.93524 46.3937C9.13909 46.3616 8.77861 46.5321 8.89333 46.8871ZM12.8444 47.3275C14.1128 49.2828 20.3917 53.4304 21.0607 52.7548C21.1995 52.6151 20.7449 51.7094 20.0514 50.7422C19.3575 49.7749 18.5468 48.3898 18.249 47.6643C17.7257 46.3885 17.6166 46.3447 14.9575 46.3447H12.2068L12.8444 47.3275ZM18.6714 46.8988C18.6714 48.1685 22.3759 52.4975 24.3643 53.5515L25.5458 54.1777V50.2614V46.3447H22.1086C19.6059 46.3447 18.6714 46.4952 18.6714 46.8988ZM26.4051 50.0331C26.4051 54.1165 26.5555 54.2875 28.8834 52.8537C30.2548 52.0093 32.7576 48.8463 33.3733 47.1796C33.6624 46.3967 33.454 46.3447 30.0434 46.3447H26.4051V50.0331ZM33.6706 48.1889C33.1675 49.2034 32.2592 50.5682 31.6525 51.2221C31.0458 51.8756 30.6858 52.5482 30.8525 52.7166C31.628 53.5003 39.7244 48.0474 39.7244 46.7417C39.7244 46.5234 38.5682 46.3447 37.1551 46.3447H34.5862L33.6706 48.1889ZM38.8651 48.6458C37.5654 49.9021 35.922 51.3566 35.213 51.8782L33.9241 52.8268L36.2077 51.9993C38.8359 51.0472 42.109 49.0229 43.5835 47.4377L44.6005 46.3447L42.9141 46.3533C41.4709 46.3607 40.8879 46.6909 38.8651 48.6458Z"
          fill="white"
        />
      </svg>}
      <text
        fill="#fff"
        strokeWidth="0.1"
        xmlSpace="preserve"
        style={{ whiteSpace: "nowrap" }}
        fontSize={region.fontSize || 20}
        x={region.titleX}
        y={region.titleY}
        className="svg__text"
      >
        {region?.title}
      </text>

      <Tooltip id="my-tooltip" />
      <MapCard />
    </g>
  );
};

export default Region;
