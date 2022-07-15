import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
      <div className='footerp'>
        <div>
            copyright@2030 asramedicalandsurgical-by Rishabh Jha
        </div>
        <div className='lin'>
            <Link className='lin' to="https://www.facebook.com/rishabh.jha.336/">facebook</Link>
            <Link  className='lin' to="https://www.instagram.com/rishabhjha552/">instagram</Link>
            <Link className='lin' to="">emailus</Link>
        </div>

      </div>
    </footer>
  );

export default Footer