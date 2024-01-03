import { SvgIcon, useTheme } from "@mui/material";
import { Dropdown } from '@mui/base';

// Messages, Conversation

export const ChatRoundDots = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 13.7596 1.41318 15.4228 2.14781 16.8977C2.34303 17.2897 2.40801 17.7377 2.29483 18.1607L1.63966 20.6093C1.35525 21.6723 2.32772 22.6447 3.39068 22.3603L5.83932 21.7052C6.26233 21.592 6.71033 21.657 7.10228 21.8522C8.5772 22.5868 10.2404 23 12 23Z"
        fill="#4F6FA3"
      />
      <path
        d="M10.9 12.0004C10.9 12.6079 11.3925 13.1004 12 13.1004C12.6075 13.1004 13.1 12.6079 13.1 12.0004C13.1 11.3929 12.6075 10.9004 12 10.9004C11.3925 10.9004 10.9 11.3929 10.9 12.0004Z"
        fill="#4F6FA3"
      />
      <path
        d="M6.5 12.0004C6.5 12.6079 6.99249 13.1004 7.6 13.1004C8.20751 13.1004 8.7 12.6079 8.7 12.0004C8.7 11.3929 8.20751 10.9004 7.6 10.9004C6.99249 10.9004 6.5 11.3929 6.5 12.0004Z"
        fill="#4F6FA3"
      />
      <path
        d="M15.3 12.0004C15.3 12.6079 15.7925 13.1004 16.4 13.1004C17.0075 13.1004 17.5 12.6079 17.5 12.0004C17.5 11.3929 17.0075 10.9004 16.4 10.9004C15.7925 10.9004 15.3 11.3929 15.3 12.0004Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const Feedback = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M13.6288 20.9718L13.0867 21.8877C12.6035 22.704 11.3965 22.704 10.9133 21.8877L10.3712 20.9718C9.95073 20.2614 9.74049 19.9063 9.40279 19.7098C9.06509 19.5134 8.63992 19.5061 7.78958 19.4915C6.53422 19.4698 5.74689 19.3929 5.08658 19.1194C3.86144 18.6119 2.88807 17.6386 2.3806 16.4134C2 15.4946 2 14.3297 2 12V11C2 7.72657 2 6.08985 2.7368 4.88751C3.14908 4.21473 3.71473 3.64908 4.38751 3.2368C5.58985 2.5 7.22657 2.5 10.5 2.5H13.5C16.7734 2.5 18.4101 2.5 19.6125 3.2368C20.2853 3.64908 20.8509 4.21473 21.2632 4.88751C22 6.08985 22 7.72657 22 11V12C22 14.3297 22 15.4946 21.6194 16.4134C21.1119 17.6386 20.1386 18.6119 18.9134 19.1194C18.2531 19.3929 17.4658 19.4698 16.2104 19.4915C15.36 19.5061 14.9349 19.5134 14.5972 19.7098C14.2595 19.9062 14.0492 20.2614 13.6288 20.9718Z"
        fill="#4F6FA3"
      />
      <path
        d="M17 11.5C17 12.0523 16.5523 12.5 16 12.5C15.4477 12.5 15 12.0523 15 11.5C15 10.9477 15.4477 10.5 16 10.5C16.5523 10.5 17 10.9477 17 11.5Z"
        fill="#4F6FA3"
      />
      <path
        d="M13 11.5C13 12.0523 12.5523 12.5 12 12.5C11.4477 12.5 11 12.0523 11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5Z"
        fill="#4F6FA3"
      />
      <path
        d="M9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const MessageDialog = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 14C18 18.4183 14.4183 22 10 22C8.76449 22 7.5944 21.7199 6.54976 21.2198C6.19071 21.0479 5.78393 20.9876 5.39939 21.0904L4.17335 21.4185C3.20701 21.677 2.32295 20.793 2.58151 19.8267L2.90955 18.6006C3.01245 18.2161 2.95209 17.8093 2.7802 17.4502C2.28008 16.4056 2 15.2355 2 14C2 9.58172 5.58172 6 10 6C14.4183 6 18 9.58172 18 14ZM6.5 15C7.05228 15 7.5 14.5523 7.5 14C7.5 13.4477 7.05228 13 6.5 13C5.94772 13 5.5 13.4477 5.5 14C5.5 14.5523 5.94772 15 6.5 15ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15ZM13.5 15C14.0523 15 14.5 14.5523 14.5 14C14.5 13.4477 14.0523 13 13.5 13C12.9477 13 12.5 13.4477 12.5 14C12.5 14.5523 12.9477 15 13.5 15Z"
        fill="#4F6FA3"
      />
      <path
        opacity="0.6"
        d="M17.984 14.5084C18.0919 14.4638 18.1983 14.4163 18.3032 14.3661C18.5949 14.2264 18.9255 14.1774 19.2379 14.261L20.2341 14.5275C21.0192 14.7376 21.7375 14.0193 21.5274 13.2342L21.2609 12.238C21.1773 11.9256 21.2263 11.595 21.366 11.3033C21.7723 10.4545 21.9999 9.50385 21.9999 8.5C21.9999 4.91015 19.0897 2 15.4999 2C12.7899 2 10.4672 3.6585 9.49146 6.0159C9.65958 6.00535 9.82911 6 9.9999 6C14.4182 6 17.9999 9.58172 17.9999 14C17.9999 14.1708 17.9945 14.3403 17.984 14.5084Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const ChatRoundLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88836 21.6244 10.4003 22 12 22Z"
        fill="#4F6FA3"
      />
      <path
        d="M7.825 12.85C7.36937 12.85 7 13.2194 7 13.675C7 14.1306 7.36937 14.5 7.825 14.5H13.875C14.3306 14.5 14.7 14.1306 14.7 13.675C14.7 13.2194 14.3306 12.85 13.875 12.85H7.825Z"
        fill="#4F6FA3"
      />
      <path
        d="M7.825 9C7.36937 9 7 9.36937 7 9.825C7 10.2806 7.36937 10.65 7.825 10.65H16.625C17.0806 10.65 17.45 10.2806 17.45 9.825C17.45 9.36937 17.0806 9 16.625 9H7.825Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const ChatRound = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.45648 3.08984C4.21754 4.74468 2 8.1136 2 12.0004C2 13.6001 2.37562 15.1121 3.04346 16.4529C3.22094 16.8092 3.28001 17.2165 3.17712 17.6011L2.58151 19.8271C2.32295 20.7934 3.20701 21.6775 4.17335 21.4189L6.39939 20.8233C6.78393 20.7204 7.19121 20.7795 7.54753 20.957C8.88836 21.6248 10.4003 22.0005 12 22.0005C16.8853 22.0005 20.9524 18.4973 21.8263 13.866C20.1758 15.7851 17.7298 17.0004 15 17.0004C10.0294 17.0004 6 12.971 6 8.00045C6 6.18869 6.53534 4.50197 7.45648 3.08984Z"
        fill="#4F6FA3"
      />
      <path
        opacity="0.5"
        d="M21.8263 13.8655C21.9403 13.2611 22 12.6375 22 12C22 6.47715 17.5228 2 12 2C10.4467 2 8.97611 2.35415 7.66459 2.98611C7.59476 3.01975 7.52539 3.05419 7.45648 3.08939C6.53534 4.50152 6 6.18824 6 8C6 12.9706 10.0294 17 15 17C17.7298 17 20.1758 15.7847 21.8263 13.8655Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const HandStars = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M6.25993 21.8884H6C5.05719 21.8884 4.58579 21.8884 4.29289 21.5955C4 21.3026 4 20.8312 4 19.8884V18.7764C4 18.2579 4 17.9987 4.13318 17.7672C4.26636 17.5356 4.46727 17.4188 4.8691 17.1851C7.51457 15.6464 11.2715 14.7803 13.7791 16.2759C13.9475 16.3764 14.0991 16.4977 14.2285 16.6431C14.7866 17.27 14.746 18.2161 14.1028 18.7775C13.9669 18.896 13.8222 18.986 13.6764 19.0172C13.7962 19.0033 13.911 18.9874 14.0206 18.9699C14.932 18.8245 15.697 18.3375 16.3974 17.8084L18.2046 16.4433C18.8417 15.962 19.7873 15.9619 20.4245 16.443C20.9982 16.8762 21.1736 17.5894 20.8109 18.1707C20.388 18.8487 19.7921 19.716 19.2199 20.2459C18.6469 20.7766 17.7939 21.2504 17.0975 21.5865C16.326 21.9589 15.4738 22.1734 14.6069 22.3138C12.8488 22.5983 11.0166 22.5549 9.27633 22.1964C8.29253 21.9937 7.27079 21.8884 6.25993 21.8884Z"
        fill="#4F6FA3"
      />
      <path
        d="M10.8613 3.86335C11.3679 2.95445 11.6213 2.5 12 2.5C12.3787 2.5 12.6321 2.95445 13.1387 3.86335L13.2698 4.09849C13.4138 4.35677 13.4858 4.48591 13.598 4.57112C13.7103 4.65633 13.8501 4.68796 14.1296 4.75122L14.3842 4.80881C15.3681 5.03142 15.86 5.14273 15.977 5.51909C16.0941 5.89546 15.7587 6.28763 15.088 7.07197L14.9144 7.27489C14.7238 7.49777 14.6285 7.60922 14.5857 7.74709C14.5428 7.88496 14.5572 8.03365 14.586 8.33102L14.6122 8.60176C14.7136 9.64824 14.7644 10.1715 14.4579 10.4041C14.1515 10.6367 13.6909 10.4246 12.7697 10.0005L12.5314 9.89074C12.2696 9.77021 12.1387 9.70994 12 9.70994C11.8613 9.70994 11.7304 9.77021 11.4686 9.89074L11.2303 10.0005C10.3091 10.4246 9.84847 10.6367 9.54206 10.4041C9.23565 10.1715 9.28635 9.64824 9.38776 8.60176L9.41399 8.33102C9.44281 8.03364 9.45722 7.88496 9.41435 7.74709C9.37147 7.60922 9.27617 7.49777 9.08557 7.27489L8.91204 7.07197C8.2413 6.28763 7.90593 5.89546 8.02297 5.51909C8.14001 5.14273 8.63194 5.03142 9.61581 4.80881L9.87035 4.75122C10.1499 4.68796 10.2897 4.65633 10.402 4.57112C10.5142 4.48591 10.5862 4.35677 10.7302 4.09849L10.8613 3.86335Z"
        fill="#4F6FA3"
      />
      <path
        d="M19.4306 8.18167C19.684 7.72722 19.8106 7.5 20 7.5C20.1894 7.5 20.316 7.72723 20.5694 8.18167L20.6349 8.29925C20.7069 8.42839 20.7429 8.49296 20.799 8.53556C20.8551 8.57817 20.925 8.59398 21.0648 8.62561L21.1921 8.65441C21.684 8.76571 21.93 8.82136 21.9885 9.00955C22.047 9.19773 21.8794 9.39381 21.544 9.78598L21.4572 9.88744C21.3619 9.99889 21.3143 10.0546 21.2928 10.1235C21.2714 10.1925 21.2786 10.2668 21.293 10.4155L21.3061 10.5509C21.3568 11.0741 21.3822 11.3357 21.229 11.452C21.0758 11.5683 20.8455 11.4623 20.3849 11.2502L20.2657 11.1954C20.1348 11.1351 20.0694 11.105 20 11.105C19.9306 11.105 19.8652 11.1351 19.7343 11.1954L19.6151 11.2502C19.1545 11.4623 18.9242 11.5683 18.771 11.452C18.6178 11.3357 18.6432 11.0741 18.6939 10.5509L18.707 10.4155C18.7214 10.2668 18.7286 10.1925 18.7072 10.1235C18.6857 10.0546 18.6381 9.99889 18.5428 9.88744L18.456 9.78598C18.1207 9.39381 17.953 9.19773 18.0115 9.00955C18.07 8.82136 18.316 8.76571 18.8079 8.65441L18.9352 8.62561C19.075 8.59398 19.1449 8.57817 19.201 8.53556C19.2571 8.49296 19.2931 8.42839 19.3651 8.29925L19.4306 8.18167Z"
        fill="#4F6FA3"
      />
      <path
        d="M3.43063 8.18167C3.68396 7.72722 3.81063 7.5 4 7.5C4.18937 7.5 4.31604 7.72723 4.56937 8.18167L4.63491 8.29925C4.7069 8.42839 4.74289 8.49296 4.79901 8.53556C4.85513 8.57817 4.92503 8.59398 5.06482 8.62561L5.19209 8.65441C5.68403 8.76571 5.93 8.82136 5.98852 9.00955C6.04704 9.19773 5.87935 9.39381 5.54398 9.78598L5.45722 9.88744C5.36191 9.99889 5.31426 10.0546 5.29283 10.1235C5.27139 10.1925 5.27859 10.2668 5.293 10.4155L5.30612 10.5509C5.35682 11.0741 5.38218 11.3357 5.22897 11.452C5.07576 11.5683 4.84547 11.4623 4.38487 11.2502L4.2657 11.1954C4.13481 11.1351 4.06937 11.105 4 11.105C3.93063 11.105 3.86519 11.1351 3.7343 11.1954L3.61513 11.2502C3.15454 11.4623 2.92424 11.5683 2.77103 11.452C2.61782 11.3357 2.64318 11.0741 2.69388 10.5509L2.707 10.4155C2.72141 10.2668 2.72861 10.1925 2.70717 10.1235C2.68574 10.0546 2.63809 9.99889 2.54278 9.88744L2.45602 9.78598C2.12065 9.39381 1.95296 9.19773 2.01148 9.00955C2.07 8.82136 2.31597 8.76571 2.80791 8.65441L2.93518 8.62561C3.07497 8.59398 3.14487 8.57817 3.20099 8.53556C3.25711 8.49296 3.29311 8.42839 3.36509 8.29925L3.43063 8.18167Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const ClosedEyes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.91858 6.60489C2.70062 6.09808 2.11327 5.86348 1.60603 6.08087C1.0984 6.29843 0.863613 6.88714 1.08117 7.39477L1.0816 7.39577L1.08267 7.39826L1.08566 7.40514L1.09505 7.42643C1.10282 7.44391 1.11363 7.46789 1.12752 7.49796C1.15529 7.55808 1.19539 7.64259 1.2481 7.74801C1.35345 7.9587 1.5096 8.25381 1.71879 8.60525C2.12772 9.29225 2.74529 10.2045 3.59029 11.1243L2.79285 11.9217C2.40232 12.3123 2.40232 12.9454 2.79285 13.336C3.18337 13.7265 3.81654 13.7265 4.20706 13.336L5.04746 12.4956C5.61245 12.9518 6.24405 13.3816 6.94417 13.7522L6.16177 14.9546C5.86056 15.4175 5.99165 16.037 6.45457 16.3382C6.91748 16.6394 7.53693 16.5083 7.83814 16.0454L8.82334 14.5313C9.50014 14.7388 10.2253 14.8866 11 14.9558V16.5C11 17.0523 11.4477 17.5 12 17.5V13C9.25227 13 7.18102 11.8014 5.69633 10.4112C5.68823 10.4033 5.68003 10.3956 5.67173 10.3881C5.47324 10.2011 5.28532 10.0108 5.10775 9.81956C4.35439 9.00826 3.80137 8.1938 3.43737 7.58228C3.25594 7.27747 3.12302 7.02571 3.03696 6.85358C2.99397 6.7676 2.96278 6.70172 2.94319 6.6593C2.93339 6.63809 2.92651 6.62277 2.9225 6.61376L2.91858 6.60489ZM1.08117 7.39477L1.99995 7.00001C1.08081 7.39393 1.08117 7.39477 1.08117 7.39477Z"
        fill="#4F6FA3"
      />
      <path
        opacity="0.5"
        d="M15.2209 12.3981C14.2784 12.7691 13.209 12.9999 12 12.9999V17.4999C12.5523 17.4999 13 17.0522 13 16.4999V14.9556C13.772 14.8865 14.4974 14.739 15.1764 14.5308L16.1618 16.0453C16.463 16.5083 17.0825 16.6393 17.5454 16.3381C18.0083 16.0369 18.1394 15.4175 17.8382 14.9546L17.0558 13.7521C17.757 13.3813 18.3885 12.9515 18.9527 12.4957L19.7929 13.3359C20.1834 13.7264 20.8166 13.7264 21.2071 13.3359C21.5976 12.9454 21.5976 12.3122 21.2071 11.9217L20.4097 11.1242C21.1521 10.3161 21.7181 9.51478 22.1207 8.86862C22.384 8.44602 22.5799 8.08584 22.7116 7.82768C22.7775 7.69849 22.8274 7.59452 22.8619 7.52066C22.8791 7.48372 22.8924 7.45428 22.902 7.43296L22.9134 7.40711L22.917 7.39889L22.9191 7.39387C23.1367 6.88624 22.9015 6.29836 22.3939 6.0808C21.8864 5.8633 21.2985 6.09868 21.0809 6.60603L21.0759 6.61722C21.0706 6.62902 21.0617 6.64866 21.0492 6.67556C21.0241 6.72937 20.9844 6.8121 20.9299 6.91904C20.8207 7.13313 20.6526 7.44286 20.4233 7.81094C19.9628 8.54999 19.2652 9.50833 18.3156 10.3997C17.4746 11.1891 16.4469 11.9156 15.2209 12.3981Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const OpenEyes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
        fill="#4F6FA3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
        fill="#4F6FA3"
      />
    </svg>
  );
};

export const BoxMinimalistic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M8.42229 21.1181C10.1779 22.0395 11.0557 22.5001 12 22.5001V12.5001L2.63802 7.57275C2.62423 7.59491 2.6107 7.61727 2.5974 7.63986C2 8.65436 2 9.91678 2 12.4416V12.5586C2 15.0834 2 16.3459 2.5974 17.3604C3.19479 18.3749 4.27063 18.9395 6.42229 20.0686L8.42229 21.1181Z"
        fill="#486BAF"
      />
      <path
        opacity="0.7"
        d="M17.5764 4.93152L15.5764 3.88197C13.8208 2.96066 12.943 2.5 11.9987 2.5C11.0544 2.5 10.1766 2.96066 8.421 3.88197L6.421 4.93152C4.31723 6.03552 3.24193 6.59982 2.63672 7.57264L11.9987 12.5L21.3607 7.57264C20.7555 6.59982 19.6802 6.03552 17.5764 4.93152Z"
        fill="#486BAF"
      />
      <path
        opacity="0.5"
        d="M21.4026 7.63986C21.3893 7.61727 21.3758 7.59491 21.362 7.57275L12 12.5001V22.5001C12.9443 22.5001 13.8221 22.0395 15.5777 21.1181L17.5777 20.0686C19.7294 18.9395 20.8052 18.3749 21.4026 17.3604C22 16.3459 22 15.0834 22 12.5586V12.4416C22 9.91678 22 8.65436 21.4026 7.63986Z"
        fill="#486BAF"
      />
    </svg>
  );
};

export const ShareCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6Z"
        fill="#486BAF"
      />
      <path
        d="M2.5 18C2.5 19.6569 3.84315 21 5.5 21C7.15685 21 8.5 19.6569 8.5 18C8.5 16.3431 7.15685 15 5.5 15C3.84315 15 2.5 16.3431 2.5 18Z"
        fill="#486BAF"
      />
      <path
        d="M18.5 21C16.8431 21 15.5 19.6569 15.5 18C15.5 16.3431 16.8431 15 18.5 15C20.1569 15 21.5 16.3431 21.5 18C21.5 19.6569 20.1569 21 18.5 21Z"
        fill="#486BAF"
      />
      <path
        d="M7.20468 7.56231C7.51523 7.28821 7.54478 6.81426 7.27069 6.5037C6.99659 6.19315 6.52264 6.1636 6.21208 6.43769C4.39676 8.03991 3.25 10.3865 3.25 13C3.25 13.4142 3.58579 13.75 4 13.75C4.41421 13.75 4.75 13.4142 4.75 13C4.75 10.8347 5.69828 8.89187 7.20468 7.56231Z"
        fill="#486BAF"
      />
      <path
        d="M17.7879 6.43769C17.4774 6.1636 17.0034 6.19315 16.7293 6.5037C16.4552 6.81426 16.4848 7.28821 16.7953 7.56231C18.3017 8.89187 19.25 10.8347 19.25 13C19.25 13.4142 19.5858 13.75 20 13.75C20.4142 13.75 20.75 13.4142 20.75 13C20.75 10.3865 19.6032 8.03991 17.7879 6.43769Z"
        fill="#486BAF"
      />
      <path
        d="M10.1869 20.0217C9.7858 19.9184 9.37692 20.1599 9.27367 20.561C9.17043 20.9622 9.41192 21.3711 9.81306 21.4743C10.5129 21.6544 11.2458 21.75 12 21.75C12.7542 21.75 13.4871 21.6544 14.1869 21.4743C14.5881 21.3711 14.8296 20.9622 14.7263 20.561C14.6231 20.1599 14.2142 19.9184 13.8131 20.0217C13.2344 20.1706 12.627 20.25 12 20.25C11.373 20.25 10.7656 20.1706 10.1869 20.0217Z"
        fill="#486BAF"
      />
    </svg>
  );
};

export const DropdownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.30273 12.4044L11.6296 15.8351C11.8428 16.0549 12.1573 16.0549 12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H12.7071L8.30273 12.4044Z" fill="#FF4545" />
      <path opacity="0.5" d="M11.2929 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L7.60648 11.6864L11.2929 8Z" fill="#FF4545" />
    </svg>
  );
}

// platform icons
export const HRIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
    >
      <path
        d="M83.9577 40.6253C83.9577 51.0957 75.4697 59.5837 64.9994 59.5837C54.529 59.5837 46.041 51.0957 46.041 40.6253C46.041 30.1549 54.529 21.667 64.9994 21.667C75.4697 21.667 83.9577 30.1549 83.9577 40.6253Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M105.624 40.6247C105.624 48.1035 99.5615 54.1663 92.0827 54.1663C84.6038 54.1663 78.541 48.1035 78.541 40.6247C78.541 33.1458 84.6038 27.083 92.0827 27.083C99.5615 27.083 105.624 33.1458 105.624 40.6247Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M24.3757 40.6247C24.3757 48.1035 30.4385 54.1663 37.9173 54.1663C45.3962 54.1663 51.459 48.1035 51.459 40.6247C51.459 33.1458 45.3962 27.083 37.9173 27.083C30.4385 27.083 24.3757 33.1458 24.3757 40.6247Z"
        fill="white"
      />
      <path
        d="M97.5 89.3753C97.5 99.8457 82.9493 108.334 65 108.334C47.0507 108.334 32.5 99.8457 32.5 89.3753C32.5 78.9049 47.0507 70.417 65 70.417C82.9493 70.417 97.5 78.9049 97.5 89.3753Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M119.167 89.3747C119.167 96.8535 109.467 102.916 97.5006 102.916C85.5345 102.916 75.834 96.8535 75.834 89.3747C75.834 81.8958 85.5345 75.833 97.5006 75.833C109.467 75.833 119.167 81.8958 119.167 89.3747Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M10.8327 89.3747C10.8327 96.8535 20.5332 102.916 32.4993 102.916C44.4655 102.916 54.166 96.8535 54.166 89.3747C54.166 81.8958 44.4655 75.833 32.4993 75.833C20.5332 75.833 10.8327 81.8958 10.8327 89.3747Z"
        fill="white"
      />
    </svg>
  );
};

export const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z"
        fill="#C6E0F9"
      />
      <path
        opacity="0.5"
        d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z"
        fill="#C6E0F9"
      />
    </svg>
  );
};
