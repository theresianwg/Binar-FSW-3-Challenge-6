import React from 'react'

function Footer() {
  return (
    <footer id="footer" class="row">
      <div class="col pr-5">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
    <div class="col pr-5 d-flex flex-column">
      <a class="nav-link mb-3 font-weight-bold" href="#our-service">Our Service</a>
      <a class="nav-link mb-3 font-weight-bold" href="#why-us">Why Us</a>
      <a class="nav-link mb-3 font-weight-bold" href="#testimonial">Testimonial</a>
      <a class="nav-link mb-3 font-weight-bold" href="#faq">FAQ</a>
    </div>
    <div class="col pr-5 mb-3">
      <p>Connect with us</p>
      <div class="d-flex">
        <a href=""><img class="mr-3" src="img/icon_facebook.svg" alt="" /></a>
        <a href=""><img class="mr-3" src="img/icon_instagram.svg" alt="" /></a>
        <a href=""><img class="mr-3" src="img/icon_twitter.svg" alt="" /></a>
        <a href=""><img class="mr-3" src="img/icon_mail.svg" alt="" /></a>
        <a href=""><img src="img/icon_twitch.svg" alt="" /></a>
      </div>
    </div>
    <div class="col">
      <p>Copyright Binar 2023</p>
      <a class="navbar-brand-last" href="#home"></a>
    </div>
  </footer>
  )
}

export default Footer