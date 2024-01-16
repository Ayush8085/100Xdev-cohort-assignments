import React from 'react'

const Card = ({ name, description, social, interests }) => {

    return (
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>Interests</h2>
            {
                interests.map((interest, index) => {
                    return (
                        <p key={index}>{interest}</p>
                    )
                })
            }
            {
                social.map((s, index) => {
                    return (
                        <button key={index} className='btn'>{s}</button>
                    )
                })
            }
        </div>
    )
}

export default Card