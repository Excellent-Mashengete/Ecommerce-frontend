import React from 'react'
import { Button } from 'rsuite';

function Mybutton(props) {
  const { handle, label, appearance, mybtn, block } = props;
    return (
        <Button className={mybtn} block={block} onClick={handle} appearance={appearance}>{label}</Button>
    )
}

export default Mybutton