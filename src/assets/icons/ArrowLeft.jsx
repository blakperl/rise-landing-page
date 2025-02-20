import * as React from 'react'

function ArrowLeft({  ...props }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.88937 15.6784C7.77377 12.5295 3.8092 9.9649 0.893944 8.44967L0.894404 7.05011C3.81058 5.76622 7.66017 3.31572 7.66117 0.283343L9.76051 0.282652C9.87603 3.66488 6.37636 5.99864 3.92686 6.81585L16.9893 7.04482L16.9887 9.14416L3.92617 8.91519C6.4918 9.61413 10.1064 12.2954 9.98871 15.6777L7.88937 15.6784Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default React.memo(ArrowLeft)
