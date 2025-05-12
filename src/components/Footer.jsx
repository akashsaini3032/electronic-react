

const Footer=()=>{
    return(
        <>
        <div id="footer">
          
    

      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We serve love <br />Taste meets tradition <br />Food Fusion Restaurant <br /> Also Home Delevery available</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing </a></li>
              <li><a href="#">About US </a></li>
              <li><a href="#">Contact US </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    

        </div>        
        </>
    )
}

export default Footer;