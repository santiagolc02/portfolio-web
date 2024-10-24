import './Skills.css'
import Skill from './Skill'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/js.png'
import React from '../../assets/react.png'
import Figma from '../../assets/figma.webp'
import Python from '../../assets/python.png'
import Django from '../../assets/django.png'
import Express from '../../assets/express.png'
import Cpp from '../../assets/c++.png'
import dotnet from '../../assets/dotnet.png'
import mysql from '../../assets/mysql.png'
import postgres from '../../assets/postgres.webp'
import firebase from '../../assets/firebase.png'
import mongo from '../../assets/mongo.png'
import swiftui from '../../assets/swift.png'
import tailwind from '../../assets/tailwind.png'
import unity from '../../assets/unity.png'
import git from '../../assets/git.png'

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills-container">
                <div className="skills-section">
                    <div className="skills-section-upper">
                        <h2>Frontend</h2>
                    </div>
                    <div className="skills-section-lower">
                        <Skill props={{img: HTML, name: 'HTML'}}></Skill>
                        <Skill props={{img: CSS, name: 'CSS'}}></Skill>
                        <Skill props={{img: JS, name: 'Javascript'}}></Skill>
                        <Skill props={{img: React, name: 'React'}}></Skill>
                        <Skill props={{img: tailwind, name: 'Tailwind'}}></Skill>
                        <Skill props={{img: Figma, name: 'Figma'}}></Skill>
                    </div>
                </div>
                <div className="skills-section">
                    <div className="skills-section-upper">
                        <h2>Backend</h2>
                    </div>
                    <div className="skills-section-lower">
                        <Skill props={{img: Python, name: 'Python'}}></Skill>
                        <Skill props={{img: Django, name: 'Django'}}></Skill>
                        <Skill props={{img: Express, name: 'Express.js'}}></Skill>
                        <Skill props={{img: Cpp, name: 'C++'}}></Skill>
                        <Skill props={{img: dotnet, name: '.NET'}}></Skill>
                    </div>
                </div>
                <div className="skills-section">
                    <div className="skills-section-upper">
                        <h2>Databases</h2>
                    </div>
                    <div className="skills-section-lower">
                        <Skill props={{img: mysql, name: 'MySQL'}}></Skill>
                        <Skill props={{img: postgres, name: 'Postgres'}}></Skill>
                        <Skill props={{img: firebase, name: 'Firebase'}}></Skill>
                        <Skill props={{img: mongo, name: 'MongoDB'}}></Skill>
                    </div>
                </div>
                <div className="skills-section">
                    <div className="skills-section-upper">
                        <h2>Mobile</h2>
                    </div>
                    <div className="skills-section-lower">
                        <Skill props={{img: swiftui, name: 'SwiftUI'}}></Skill>
                        <Skill props={{img: React, name: 'React Native'}}></Skill>
                    </div>
                </div>
                <div className="skills-section">
                    <div className="skills-section-upper">
                        <h2>Other</h2>
                    </div>
                    <div className="skills-section-lower">
                        <Skill props={{img: unity, name: 'Unity (C#)'}}></Skill>
                        <Skill props={{img: git, name: 'Git'}}></Skill>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
