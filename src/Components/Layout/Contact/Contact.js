import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div>
        
        <div class="right-side">

<div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
            <input type="text" placeholder='Enter your message' />
          
        </div>
        
      </form>

      </div>



    </div>
  )
}
