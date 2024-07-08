    import React from 'react'
    import './Contact.css'
    import location from '../../assets/location.png'
    import mail from '../../assets/email.png'
    import phone from '../../assets/phone-book.png'
    import fb from '../../assets/facebook.png'
    
    const Contact = () => {
      return (
            <div className='contactus'>
                <div className="contactinfo">
                    <h3>კონტაქტი</h3>
                    <div className="info">
                        <img src={location} alt="location" className='iconimg'/>
                        <p>თბილისი, ქინძმარაულის 5</p>
                    </div>
                    <div className="info">
                        <img src={phone} alt="location" className='iconimg'/>
                        <p>+995598350394 , +995571154774</p>
                    </div>
                    <div className="info">
                        <img src={mail} alt="location" className='iconimg'/>
                        <p>info@clubgantiadi.edu.ge</p>
                    </div>
                    <div className="info infofb">
                        <p>განთიადის მოსწავლეების და სპორტსმენების მიღწევების სანახავად ეწვიეთ ფეისბუქ გვერდს (დააკლიკეთ ლოგოს)</p>
                        <a className='fblink' href="https://www.facebook.com/gantiadi.official"><img src={fb} alt="location" className='iconimg'/></a>
                    </div>
                </div>
                <iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%E1%83%A5%E1%83%98%E1%83%9C%E1%83%AB%E1%83%9B%E1%83%90%E1%83%A0%E1%83%90%E1%83%A3%E1%83%9A%E1%83%98%E1%83%A1%205,%202%20Ilia%20Babutsidze%20St,%20Tbilisi%200134+(%E1%83%92%E1%83%90%E1%83%9C%E1%83%97%E1%83%98%E1%83%90%E1%83%93%E1%83%98)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
            </div>
      )
    }
    
    export default Contact