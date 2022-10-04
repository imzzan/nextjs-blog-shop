import React from 'react'

interface StyleProps {
  className: string;
}

const Footer = (props : StyleProps) => {
  const {className} = props;
  return (
    <div>
        <p className={className}>Made With Love @Muzani</p>
    </div>
  )
}

export default Footer