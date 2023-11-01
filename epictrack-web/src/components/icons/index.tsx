import React from "react";
import { IconProps } from "./type";

const commonProps = {
  className: "sidebar-item",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
};
const AllIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4.125 2.25C4.73438 2.25 5.25 2.76562 5.25 3.375V5.625C5.25 6.28125 4.73438 6.75 4.125 6.75H1.875C1.21875 6.75 0.75 6.28125 0.75 5.625V3.375C0.75 2.76562 1.21875 2.25 1.875 2.25H4.125ZM22.5 3C23.2969 3 24 3.70312 24 4.5C24 5.34375 23.2969 6 22.5 6H9C8.15625 6 7.5 5.34375 7.5 4.5C7.5 3.70312 8.15625 3 9 3H22.5ZM22.5 10.5C23.2969 10.5 24 11.2031 24 12C24 12.8438 23.2969 13.5 22.5 13.5H9C8.15625 13.5 7.5 12.8438 7.5 12C7.5 11.2031 8.15625 10.5 9 10.5H22.5ZM22.5 18C23.2969 18 24 18.7031 24 19.5C24 20.3438 23.2969 21 22.5 21H9C8.15625 21 7.5 20.3438 7.5 19.5C7.5 18.7031 8.15625 18 9 18H22.5ZM0.75 10.875C0.75 10.2656 1.21875 9.75 1.875 9.75H4.125C4.73438 9.75 5.25 10.2656 5.25 10.875V13.125C5.25 13.7812 4.73438 14.25 4.125 14.25H1.875C1.21875 14.25 0.75 13.7812 0.75 13.125V10.875ZM4.125 17.25C4.73438 17.25 5.25 17.7656 5.25 18.375V20.625C5.25 21.2812 4.73438 21.75 4.125 21.75H1.875C1.21875 21.75 0.75 21.2812 0.75 20.625V18.375C0.75 17.7656 1.21875 17.25 1.875 17.25H4.125Z" />
    </svg>
  );
};

const DashboardIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M1.5 3.375C1.5 2.34375 2.29688 1.5 3.375 1.5H5.625C6.65625 1.5 7.5 2.34375 7.5 3.375V5.625C7.5 6.70312 6.65625 7.5 5.625 7.5H3.375C2.29688 7.5 1.5 6.70312 1.5 5.625V3.375ZM1.5 10.875C1.5 9.84375 2.29688 9 3.375 9H5.625C6.65625 9 7.5 9.84375 7.5 10.875V13.125C7.5 14.2031 6.65625 15 5.625 15H3.375C2.29688 15 1.5 14.2031 1.5 13.125V10.875ZM7.5 20.625C7.5 21.7031 6.65625 22.5 5.625 22.5H3.375C2.29688 22.5 1.5 21.7031 1.5 20.625V18.375C1.5 17.3438 2.29688 16.5 3.375 16.5H5.625C6.65625 16.5 7.5 17.3438 7.5 18.375V20.625ZM9 3.375C9 2.34375 9.79688 1.5 10.875 1.5H13.125C14.1562 1.5 15 2.34375 15 3.375V5.625C15 6.70312 14.1562 7.5 13.125 7.5H10.875C9.79688 7.5 9 6.70312 9 5.625V3.375ZM15 13.125C15 14.2031 14.1562 15 13.125 15H10.875C9.79688 15 9 14.2031 9 13.125V10.875C9 9.84375 9.79688 9 10.875 9H13.125C14.1562 9 15 9.84375 15 10.875V13.125ZM9 18.375C9 17.3438 9.79688 16.5 10.875 16.5H13.125C14.1562 16.5 15 17.3438 15 18.375V20.625C15 21.7031 14.1562 22.5 13.125 22.5H10.875C9.79688 22.5 9 21.7031 9 20.625V18.375ZM22.5 5.625C22.5 6.70312 21.6562 7.5 20.625 7.5H18.375C17.2969 7.5 16.5 6.70312 16.5 5.625V3.375C16.5 2.34375 17.2969 1.5 18.375 1.5H20.625C21.6562 1.5 22.5 2.34375 22.5 3.375V5.625ZM16.5 10.875C16.5 9.84375 17.2969 9 18.375 9H20.625C21.6562 9 22.5 9.84375 22.5 10.875V13.125C22.5 14.2031 21.6562 15 20.625 15H18.375C17.2969 15 16.5 14.2031 16.5 13.125V10.875ZM22.5 20.625C22.5 21.7031 21.6562 22.5 20.625 22.5H18.375C17.2969 22.5 16.5 21.7031 16.5 20.625V18.375C16.5 17.3438 17.2969 16.5 18.375 16.5H20.625C21.6562 16.5 22.5 17.3438 22.5 18.375V20.625Z" />
    </svg>
  );
};

const ReportIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M16.5 0L21 4.5H16.5V0ZM15 4.5C15 5.34375 15.6562 6 16.5 6H21V17.25C21 18.5156 19.9688 19.5 18.75 19.5H6.75C5.48438 19.5 4.5 18.5156 4.5 17.25V2.25C4.5 1.03125 5.48438 0 6.75 0H15V4.5ZM15.375 24C15.9844 24 16.5 23.5312 16.5 22.875C16.5 22.2656 15.9844 21.75 15.375 21.75H5.625C3.75 21.75 2.25 20.25 2.25 18.375V5.625C2.25 5.01562 1.73438 4.5 1.125 4.5C0.46875 4.5 0 5.01562 0 5.625V18.375C0 21.5156 2.48438 24 5.625 24H15.375Z" />
    </svg>
  );
};

const InsightIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12.5625 1.48047C12.5625 1.09375 12.8203 0.75 13.25 0.75C18.5352 0.75 22.875 5.08984 22.875 10.375C22.875 10.7617 22.5312 11.0625 22.1445 11.0625H12.5625V1.48047ZM0.875 12.4375C0.875 7.23828 4.74219 2.94141 9.72656 2.25391C10.1562 2.16797 10.5 2.51172 10.5 2.89844V13.125L17.2031 19.8711C17.5039 20.1719 17.4609 20.6445 17.1602 20.8594C15.4414 22.0625 13.3789 22.75 11.1875 22.75C5.47266 22.75 0.875 18.1523 0.875 12.4375ZM23.4766 13.125C23.8633 13.125 24.207 13.4688 24.1211 13.8555C23.8203 16.2617 22.6602 18.4102 20.9414 20C20.6836 20.2148 20.2969 20.2148 20.0391 19.957L13.25 13.125H23.4766Z" />
    </svg>
  );
};

const GearIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M23.2031 7.82812C23.3906 8.25 23.25 8.67188 22.9219 9L20.9062 10.8281C20.9531 11.2031 21 11.625 21 12C21 12.4219 20.9531 12.8438 20.9062 13.2188L22.9219 15.0469C23.25 15.375 23.3906 15.7969 23.2031 16.2188C23.0156 16.7812 22.7812 17.2969 22.5 17.8125L22.2656 18.1875C21.9375 18.7031 21.6094 19.2188 21.2344 19.6875C20.9531 20.0156 20.4844 20.1094 20.0625 19.9688L17.4844 19.1719C16.8281 19.6406 16.125 20.0156 15.4219 20.3438L14.8125 23.0156C14.7188 23.4375 14.3906 23.7656 13.9688 23.8594C13.3125 23.9531 12.6562 24 11.9531 24C11.2969 24 10.6406 23.9531 9.98438 23.8594C9.5625 23.7656 9.23438 23.4375 9.14062 23.0156L8.53125 20.3438C7.82812 20.0156 7.125 19.6406 6.46875 19.1719L3.89062 19.9688C3.46875 20.1094 3 20.0156 2.71875 19.6875C2.34375 19.2188 2.01562 18.7031 1.6875 18.1875L1.45312 17.8125C1.17188 17.2969 0.9375 16.7812 0.75 16.2188C0.5625 15.7969 0.703125 15.375 1.03125 15.0469L3.04688 13.2188C3 12.8438 3 12.4219 3 12C3 11.625 3 11.2031 3.04688 10.8281L1.03125 9C0.703125 8.67188 0.5625 8.25 0.75 7.82812C0.9375 7.26562 1.17188 6.75 1.45312 6.23438L1.6875 5.85938C2.01562 5.34375 2.34375 4.82812 2.71875 4.35938C3 4.03125 3.46875 3.9375 3.89062 4.07812L6.46875 4.875C7.125 4.40625 7.82812 3.98438 8.53125 3.70312L9.14062 1.03125C9.23438 0.609375 9.5625 0.28125 9.98438 0.1875C10.6406 0.09375 11.2969 0 12 0C12.6562 0 13.3125 0.09375 13.9688 0.1875C14.3906 0.28125 14.7188 0.609375 14.8125 1.03125L15.4219 3.70312C16.125 3.98438 16.8281 4.40625 17.4844 4.875L20.0625 4.07812C20.4844 3.9375 20.9531 4.03125 21.2344 4.35938C21.6094 4.82812 21.9375 5.34375 22.2656 5.85938L22.5 6.23438C22.7812 6.75 23.0156 7.26562 23.2031 7.82812ZM12 15.75C14.0625 15.75 15.75 14.1094 15.75 12C15.75 9.9375 14.0625 8.25 12 8.25C9.89062 8.25 8.25 9.9375 8.25 12C8.25 14.1094 9.89062 15.75 12 15.75Z" />
    </svg>
  );
};

const PenIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M13.5 6C13.5 6.84375 14.1562 7.5 15 7.5H21V21.75C21 23.0156 19.9688 24 18.75 24H5.25C3.98438 24 3 23.0156 3 21.75V2.25C3 1.03125 3.98438 0 5.25 0H13.5V6ZM10.0781 20.2969L14.625 15.75L12 13.125L7.45312 17.6719C7.35938 17.7656 7.26562 17.9062 7.26562 18.0469L6.75 20.625C6.70312 20.8594 6.89062 21.0469 7.125 21L9.70312 20.4844C9.84375 20.4844 9.98438 20.3906 10.0781 20.2969ZM16.0781 10.9219C15.5625 10.4062 14.7188 10.4062 14.2031 10.9219L13.0781 12.0469L15.7031 14.6719L16.8281 13.5469C17.3438 13.0312 17.3438 12.1875 16.8281 11.6719L16.0781 10.9219ZM15 0L21 6H15V0Z" />
    </svg>
  );
};

const GridIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M16.875 17.25V19.5H14.625V17.25H16.875ZM15 0L21 6H15V0ZM16.875 13.5V15.75H14.625V13.5H16.875ZM13.125 13.5V15.75H10.875V13.5H13.125ZM13.125 17.25V19.5H10.875V17.25H13.125ZM9.375 17.25V19.5H7.125V17.25H9.375ZM13.5 6C13.5 6.84375 14.1562 7.5 15 7.5H21V21.75C21 23.0156 19.9688 24 18.75 24H5.25C3.98438 24 3 23.0156 3 21.75V2.25C3 1.03125 3.98438 0 5.25 0H13.5V6ZM18.375 11.25C18.375 10.875 18 10.5 17.625 10.5H6.375C5.95312 10.5 5.625 10.875 5.625 11.25V20.25C5.625 20.6719 5.95312 21 6.375 21H17.625C18 21 18.375 20.6719 18.375 20.25V11.25ZM9.375 13.5V15.75H7.125V13.5H9.375Z" />
    </svg>
  );
};

const NotificationSuccess = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path
        d="M0 12C0 5.39062 5.34375 0 12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12ZM17.3906 9.9375C17.9062 9.42188 17.9062 8.625 17.3906 8.10938C16.875 7.59375 16.0781 7.59375 15.5625 8.10938L10.5 13.1719L8.39062 11.1094C7.875 10.5938 7.07812 10.5938 6.5625 11.1094C6.04688 11.625 6.04688 12.4219 6.5625 12.9375L9.5625 15.9375C10.0781 16.4531 10.875 16.4531 11.3906 15.9375L17.3906 9.9375Z"
        fill="#236430"
      />
    </svg>
  );
};

const NotificationClose = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path
        d="M19.125 17.5781C19.5469 18.0469 19.5469 18.75 19.125 19.1719C18.6562 19.6406 17.9531 19.6406 17.5312 19.1719L12 13.5938L6.42188 19.1719C5.95312 19.6406 5.25 19.6406 4.82812 19.1719C4.35938 18.75 4.35938 18.0469 4.82812 17.5781L10.4062 12L4.82812 6.42188C4.35938 5.95312 4.35938 5.25 4.82812 4.82812C5.25 4.35938 5.95312 4.35938 6.375 4.82812L12 10.4531L17.5781 4.875C18 4.40625 18.7031 4.40625 19.125 4.875C19.5938 5.29688 19.5938 6 19.125 6.46875L13.5469 12L19.125 17.5781Z"
        fill="#494949"
      />
    </svg>
  );
};

const NotificationError = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path
        d="M12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0ZM10.875 7.125V13.125C10.875 13.7812 11.3438 14.25 12 14.25C12.6094 14.25 13.125 13.7812 13.125 13.125V7.125C13.125 6.51562 12.6094 6 12 6C11.3438 6 10.875 6.51562 10.875 7.125ZM12 18.75C12.7969 18.75 13.4531 18.0938 13.4531 17.2969C13.4531 16.5 12.7969 15.8438 12 15.8438C11.1562 15.8438 10.5 16.5 10.5 17.2969C10.5 18.0938 11.1562 18.75 12 18.75Z"
        fill={props?.fill || "#A31E22"}
      />
    </svg>
  );
};
const NotificationInfo = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path
        d="M12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0ZM12 6C11.1562 6 10.5 6.70312 10.5 7.5C10.5 8.34375 11.1562 9 12 9C12.7969 9 13.5 8.34375 13.5 7.5C13.5 6.70312 12.7969 6 12 6ZM13.875 18C14.4844 18 15 17.5312 15 16.875C15 16.2656 14.4844 15.75 13.875 15.75H13.125V11.625C13.125 11.0156 12.6094 10.5 12 10.5H10.5C9.84375 10.5 9.375 11.0156 9.375 11.625C9.375 12.2812 9.84375 12.75 10.5 12.75H10.875V15.75H10.125C9.46875 15.75 9 16.2656 9 16.875C9 17.5312 9.46875 18 10.125 18H13.875Z"
        fill="#003366"
      />
    </svg>
  );
};
const NotificationWarning = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path
        d="M24.7188 19.5469C25.4688 20.8594 24.5312 22.5 22.9844 22.5H2.96875C1.42188 22.5 0.484375 20.8594 1.23438 19.5469L11.2656 2.48438C12.0156 1.17188 13.9375 1.17188 14.7344 2.48438L24.7188 19.5469ZM11.875 7.875V13.875C11.875 14.5312 12.4375 15 13 15C13.6094 15 14.125 14.5312 14.125 13.875V7.875C14.125 7.26562 13.6094 6.75 13 6.75C12.3438 6.75 11.875 7.26562 11.875 7.875ZM13 19.5C13.7969 19.5 14.4531 18.8438 14.4531 18.0469C14.4531 17.25 13.7969 16.5938 13 16.5938C12.1562 16.5938 11.5 17.25 11.5 18.0469C11.5 18.8438 12.1562 19.5 13 19.5Z"
        fill="#674901"
      />
    </svg>
  );
};

const CopyOutlinedIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="17" height="16" viewBox="0 0 17 16">
      <path d="M16.6875 2.21875C16.875 2.40625 17 2.65625 17 2.9375V10C17 11.125 16.0938 12 15 12H9C7.875 12 7 11.125 6.96875 10V2C6.96875 0.90625 7.84375 0 8.96875 0H14.0625C14.3438 0 14.5938 0.125 14.7812 0.3125L16.6875 2.21875ZM15.5 10H15.4688V4H14C13.4375 4 13 3.5625 13 3L12.9688 1.53125H8.96875C8.6875 1.53125 8.46875 1.75 8.46875 2.03125V10C8.46875 10.2812 8.6875 10.5 8.96875 10.5H15C15.25 10.5 15.5 10.2812 15.5 10ZM9.5 14V13H11V14C11 15.125 10.0938 16 9 16H3C1.875 16 1 15.125 1 14L0.96875 6C0.96875 4.90625 1.875 4 2.96875 4H6V5.53125H2.96875C2.71875 5.53125 2.46875 5.75 2.46875 6.03125V14C2.46875 14.2812 2.6875 14.5 2.96875 14.5H9C9.25 14.5 9.5 14.2812 9.5 14Z" />
    </svg>
  );
};

const CopyFilledIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M12 3C12 3.5625 12.4375 4 13 4H16V10.5C16 11.3438 15.3125 12 14.5 12H8.5C7.65625 12 7 11.3438 7 10.5V1.5C7 0.6875 7.65625 0 8.5 0H12V3ZM13 0L16 3H13V0ZM6 11C6 12.125 6.875 13 8 13H9V14.5C9 15.3438 8.3125 16 7.5 16H1.5C0.65625 16 0 15.3438 0 14.5V5.5C0 4.6875 0.65625 4 1.5 4H6V11Z" />
    </svg>
  );
};

const UserIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props}>
      <path d="M11 12C7.67188 12 5 9.32812 5 6C5 2.71875 7.67188 0 11 0C14.2812 0 17 2.71875 17 6C17 9.32812 14.2812 12 11 12ZM13.3438 14.25C17.8438 14.25 21.5 17.9062 21.5 22.4062C21.5 23.2969 20.75 24 19.8594 24H2.09375C1.20312 24 0.5 23.2969 0.5 22.4062C0.5 17.9062 4.10938 14.25 8.60938 14.25H13.3438Z" />
    </svg>
  );
};

const ImportFileIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M11.75 0.875L15.5 4.625H11.75V0.875ZM10.8125 4.625C10.8125 5.15234 11.2227 5.5625 11.75 5.5625H15.5V14.4688C15.5 15.2598 14.8555 15.875 14.0938 15.875H5.65625C4.86523 15.875 4.25 15.2598 4.25 14.4688V10.7188H9.34766L8.20508 11.8906C8.05859 12.0078 8 12.1836 8 12.3594C8 12.5645 8.05859 12.7402 8.20508 12.8574C8.46875 13.1504 8.9082 13.1504 9.20117 12.8574L11.5449 10.5137C11.8086 10.25 11.8086 9.81055 11.5449 9.54688L9.20117 7.20312C8.9082 6.91016 8.46875 6.91016 8.20508 7.20312C7.91211 7.4668 7.91211 7.90625 8.20508 8.16992L9.34766 9.3125H4.25V2.28125C4.25 1.51953 4.86523 0.875 5.65625 0.875H10.8125V4.625ZM1.20312 9.3125H4.25V10.7188H1.20312C0.792969 10.7188 0.5 10.4258 0.5 10.0156C0.5 9.63477 0.792969 9.3125 1.20312 9.3125Z" />
    </svg>
  );
};

const DownloadIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M15 11C15.5312 11 16 11.4688 16 12V15C16 15.5625 15.5312 16 15 16H1C0.4375 16 0 15.5625 0 15V12C0 11.4688 0.4375 11 1 11H5.15625L6.5625 12.4375C6.9375 12.8125 7.4375 13 8 13C8.53125 13 9.03125 12.8125 9.40625 12.4375L10.8125 11H15ZM13.5 14.25C13.9062 14.25 14.25 13.9375 14.25 13.5C14.25 13.0938 13.9062 12.75 13.5 12.75C13.0625 12.75 12.75 13.0938 12.75 13.5C12.75 13.9375 13.0625 14.25 13.5 14.25ZM7.28125 11.7188L3.28125 7.71875C2.875 7.34375 2.875 6.6875 3.28125 6.3125C3.65625 5.90625 4.3125 5.90625 4.6875 6.3125L7 8.59375V1C7 0.46875 7.4375 0 8 0C8.53125 0 9 0.46875 9 1V8.59375L11.2812 6.3125C11.6562 5.90625 12.3125 5.90625 12.6875 6.3125C13.0938 6.6875 13.0938 7.34375 12.6875 7.71875L8.6875 11.7188C8.5 11.9062 8.25 12 8 12C7.71875 12 7.46875 11.9062 7.28125 11.7188Z" />
    </svg>
  );
};

const CollapseIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M1.46875 9.46875L7.4375 3.75C7.625 3.59375 7.8125 3.5 8 3.5C8.1875 3.5 8.34375 3.5625 8.5 3.6875L14.4688 9.40625C14.7812 9.71875 14.7812 10.1875 14.5 10.4688C14.2188 10.7812 13.75 10.7812 13.4375 10.5L8 5.3125L2.5 10.5625C2.21875 10.8438 1.71875 10.8438 1.4375 10.5312C1.15625 10.2188 1.15625 9.75 1.46875 9.46875Z" />
    </svg>
  );
};

const ExpandIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M14.5 6.5625L8.53125 12.2812C8.34375 12.4375 8.15625 12.5 8 12.5C7.8125 12.5 7.625 12.4375 7.46875 12.3125L1.46875 6.5625C1.15625 6.28125 1.15625 5.78125 1.4375 5.5C1.71875 5.1875 2.21875 5.1875 2.5 5.46875L8 10.7188L13.4688 5.46875C13.75 5.1875 14.25 5.1875 14.5312 5.5C14.8125 5.78125 14.8125 6.28125 14.5 6.5625Z" />
    </svg>
  );
};

const EditIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M14.1562 7.90625L6.875 15.1875L5.8125 14.125L5.9375 14H4.5C4.21875 14 4 13.7812 4 13.5V12.0625L3.875 12.1875C3.71875 12.3438 3.625 12.5 3.5625 12.7188L2.84375 15.1562L5.28125 14.4375C5.46875 14.375 5.65625 14.2812 5.8125 14.125L6.875 15.1875C6.5625 15.5 6.15625 15.75 5.71875 15.875L1.9375 16.9688C1.6875 17.0625 1.40625 17 1.21875 16.7812C1 16.5938 0.9375 16.3125 1 16.0625L2.125 12.2812C2.25 11.8438 2.5 11.4375 2.8125 11.125L10.0938 3.84375L14.1562 7.90625ZM16.375 2.84375C17.1562 3.625 17.1562 4.90625 16.375 5.6875L14.875 7.1875L10.8125 3.125L12.3125 1.625C13.0938 0.84375 14.375 0.84375 15.1562 1.625L16.375 2.84375Z" />
    </svg>
  );
};

const LockIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="16" height="16" viewBox="0 0 16 16">
      <path d="M8.75 12C8.75 12.4375 8.40625 12.75 8 12.75C7.5625 12.75 7.25 12.4375 7.25 12V10C7.25 9.59375 7.5625 9.25 8 9.25C8.40625 9.25 8.75 9.59375 8.75 10V12ZM8 0C10.1875 0 12 1.8125 12 4V6H13C14.0938 6 15 6.90625 15 8V14C15 15.125 14.0938 16 13 16H3C1.875 16 1 15.125 1 14V8C1 6.90625 1.875 6 3 6H4V4C4 1.8125 5.78125 0 8 0ZM8 1.5C6.59375 1.5 5.5 2.625 5.5 4V6H10.5V4C10.5 2.625 9.375 1.5 8 1.5ZM3 7.5C2.71875 7.5 2.5 7.75 2.5 8V14C2.5 14.2812 2.71875 14.5 3 14.5H13C13.25 14.5 13.5 14.2812 13.5 14V8C13.5 7.75 13.25 7.5 13 7.5H3Z" />
    </svg>
  );
};

const DeleteIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="14" height="16" viewBox="0 0 14 16">
      <path d="M4.21875 0.5625C4.375 0.21875 4.71875 0 5.09375 0H8.875C9.25 0 9.59375 0.21875 9.75 0.5625L10 1H13C13.5312 1 14 1.46875 14 2C14 2.5625 13.5312 3 13 3H1C0.4375 3 0 2.5625 0 2C0 1.46875 0.4375 1 1 1H4L4.21875 0.5625ZM0.96875 4H13V14C13 15.125 12.0938 16 11 16H2.96875C1.875 16 0.96875 15.125 0.96875 14V4ZM3.46875 6.5V13.5C3.46875 13.7812 3.71875 14 3.96875 14C4.25 14 4.46875 13.7812 4.46875 13.5V6.5C4.46875 6.25 4.25 6 3.96875 6C3.71875 6 3.46875 6.25 3.46875 6.5ZM6.46875 6.5V13.5C6.46875 13.7812 6.71875 14 6.96875 14C7.25 14 7.5 13.7812 7.5 13.5V6.5C7.5 6.25 7.25 6 6.96875 6C6.71875 6 6.46875 6.25 6.46875 6.5ZM9.5 6.5V13.5C9.5 13.7812 9.71875 14 10 14C10.25 14 10.5 13.7812 10.5 13.5V6.5C10.5 6.25 10.25 6 10 6C9.71875 6 9.5 6.25 9.5 6.5Z" />
    </svg>
  );
};

const LinkIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} height="1em" viewBox="0 0 640 512">
      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
    </svg>
  );
};

const InfoIcon = (props: IconProps) => {
  return (
    <svg {...commonProps} {...props} width="12" height="13" viewBox="0 0 12 13">
      <path
        opacity="0.8"
        d="M6 0.5C9.30469 0.5 12 3.19531 12 6.5C12 9.82812 9.30469 12.5 6 12.5C2.67188 12.5 0 9.82812 0 6.5C0 3.19531 2.67188 0.5 6 0.5ZM6 3.5C5.57812 3.5 5.25 3.85156 5.25 4.25C5.25 4.67188 5.57812 5 6 5C6.39844 5 6.75 4.67188 6.75 4.25C6.75 3.85156 6.39844 3.5 6 3.5ZM6.9375 9.5C7.24219 9.5 7.5 9.26562 7.5 8.9375C7.5 8.63281 7.24219 8.375 6.9375 8.375H6.5625V6.3125C6.5625 6.00781 6.30469 5.75 6 5.75H5.25C4.92188 5.75 4.6875 6.00781 4.6875 6.3125C4.6875 6.64062 4.92188 6.875 5.25 6.875H5.4375V8.375H5.0625C4.73438 8.375 4.5 8.63281 4.5 8.9375C4.5 9.26562 4.73438 9.5 5.0625 9.5H6.9375Z"
      />
    </svg>
  );
};

const CheckCircleIcon = (props: IconProps) => {
  return (
    <svg
      {...commonProps}
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.59375 10.625C7.25 10.9688 6.71875 10.9688 6.375 10.625L4.375 8.625C4.03125 8.28125 4.03125 7.75 4.375 7.40625C4.71875 7.0625 5.25 7.0625 5.59375 7.40625L7 8.78125L10.375 5.40625C10.7188 5.0625 11.25 5.0625 11.5938 5.40625C11.9375 5.75 11.9375 6.28125 11.5938 6.625L7.59375 10.625ZM16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8ZM8 1.5C4.40625 1.5 1.5 4.4375 1.5 8C1.5 11.5938 4.40625 14.5 8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5Z"
        fill="#1A5A96"
      />
    </svg>
  );
};

const PencilEditIcon = (props: IconProps) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path
        d="M11.6562 1.78125C12.5312 0.90625 13.9375 0.90625 14.8125 1.78125L15.2188 2.1875C16.0938 3.0625 16.0938 4.46875 15.2188 5.34375L9.03125 11.5312C8.78125 11.7812 8.4375 12 8.0625 12.0938L4.9375 13C4.6875 13.0625 4.40625 13 4.21875 12.7812C4 12.5938 3.9375 12.3125 4 12.0625L4.90625 8.9375C5 8.5625 5.21875 8.21875 5.46875 7.96875L11.6562 1.78125ZM13.75 2.84375C13.4688 2.5625 13 2.5625 12.7188 2.84375L11.7812 3.75L13.25 5.21875L14.1562 4.28125C14.4375 4 14.4375 3.53125 14.1562 3.25L13.75 2.84375ZM6.34375 9.34375L5.8125 11.1875L7.65625 10.6562C7.78125 10.625 7.875 10.5625 7.96875 10.4688L12.1875 6.25L10.75 4.8125L6.53125 9.03125C6.4375 9.125 6.375 9.21875 6.34375 9.34375ZM6.25 3C6.65625 3 7 3.34375 7 3.75C7 4.1875 6.65625 4.5 6.25 4.5H2.75C2.03125 4.5 1.5 5.0625 1.5 5.75V14.25C1.5 14.9688 2.03125 15.5 2.75 15.5H11.25C11.9375 15.5 12.5 14.9688 12.5 14.25V10.75C12.5 10.3438 12.8125 10 13.25 10C13.6562 10 14 10.3438 14 10.75V14.25C14 15.7812 12.75 17 11.25 17H2.75C1.21875 17 0 15.7812 0 14.25V5.75C0 4.25 1.21875 3 2.75 3H6.25Z"
        fill="#1A5A96"
      />
    </svg>
  );
};

const CloneIcon = (props: IconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M2 14.5H9C9.25 14.5 9.5 14.2812 9.5 14V12H11V14C11 15.125 10.0938 16 9 16H2C0.875 16 0 15.125 0 14V7C0 5.90625 0.875 5 2 5H4V6.5H2C1.71875 6.5 1.5 6.75 1.5 7V14C1.5 14.2812 1.71875 14.5 2 14.5ZM5 2C5 0.90625 5.875 0 7 0H14C15.0938 0 16 0.90625 16 2V9C16 10.125 15.0938 11 14 11H7C5.875 11 5 10.125 5 9V2ZM7 9.5H14C14.25 9.5 14.5 9.28125 14.5 9V2C14.5 1.75 14.25 1.5 14 1.5H7C6.71875 1.5 6.5 1.75 6.5 2V9C6.5 9.28125 6.71875 9.5 7 9.5Z"
        fill="#1A5A96"
      />
    </svg>
  );
};

const icons: { [x: string]: React.FC<IconProps> } = {
  AllIcon,
  DashboardIcon,
  ReportIcon,
  InsightIcon,
  GearIcon,
  PenIcon,
  GridIcon,
  NotificationSuccess,
  NotificationClose,
  NotificationError,
  NotificationInfo,
  NotificationWarning,
  CopyOutlinedIcon,
  CopyFilledIcon,
  UserIcon,
  ImportFileIcon,
  DownloadIcon,
  CollapseIcon,
  ExpandIcon,
  EditIcon,
  LockIcon,
  DeleteIcon,
  LinkIcon,
  InfoIcon,
  CheckCircleIcon,
  PencilEditIcon,
  CloneIcon,
};

export default icons;
