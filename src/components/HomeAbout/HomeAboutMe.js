import '../HomeAbout/HomeAboutMeStyles.css'

import React from 'react'
import { Link } from 'react-router-dom';

const HomeAboutMe = () => {

    const imgs = 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60';

    return (
        <div className='aboutMe-container'>
            <div className='left-part'>
                <img src={imgs} className="image" />
            </div>
            <div className='right-part'>
                <h1>About Me</h1>
                <h3>Developer <a style={{ color: 'yellow' }}>& Designer</a></h3>
                <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working
                    individual. I am an excellent team worker and adaptable to any challenging
                    situation. I am looking for a reputable organization to expand my experience
                    by mastering my skills.</p>
                <Link to="/about">
                    <button className='btnFind' >Find More</button>
                </Link>

            </div>
        </div>
    )
}

export default HomeAboutMe