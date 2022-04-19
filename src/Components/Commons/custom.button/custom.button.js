import React from 'react'
import './custom.button.css';

export default function CustomButton(props) {
  return (
    <div>

<div class="btn">
          <input type="button" value="Contact Us" />
        </div>

{
  props.children
}





    </div>
  )
}
