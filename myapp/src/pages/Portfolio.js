import React from 'react';
import { useNavigate } from "react-router-dom";

function Portfolio() {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '40px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '50px' }}>
                    <h1 style={{ 
                        fontSize: '2.8rem', 
                        fontWeight: '700', 
                        color: '#2c3e50',
                        marginBottom: '10px',
                        fontFamily: 'Georgia, serif'
                    }}>
                        Portfolio
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
                        Here's what I've been working on. Some are finished, some are still in progress!
                    </p>
                </div>

                {/* Projects */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    
                    {/* Calculator Project */}
                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '30px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        borderLeft: '5px solid #3498db'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ 
                                fontSize: '3.5rem',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '12px',
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                🧮
                            </div>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#2c3e50', marginBottom: '10px' }}>
                                    Calculator App
                                </h3>
                                <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '15px' }}>
                                    My first real React project! It does addition, subtraction, multiplication, division, and modulus. 
                                    Pretty proud of how it turned out - the live updating is cool.
                                </p>
                                <button 
                                    onClick={() => navigate('/Calculator')}
                                    style={{
                                        background: '#3498db',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 25px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#2980b9'}
                                    onMouseOut={(e) => e.target.style.background = '#3498db'}
                                >
                                    Try Calculator →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Project */}
                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '30px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        borderLeft: '5px solid #e67e22'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ 
                                fontSize: '3.5rem',
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                borderRadius: '12px',
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                🍗
                            </div>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#2c3e50', marginBottom: '10px' }}>
                                    Recipe Finder
                                </h3>
                                <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '15px' }}>
                                    Connected to a real API for this one! Shows my favorite Chicken Handi recipe with ingredients and steps. 
                                    Even has a YouTube video embedded. Took me a while to get the styling right.
                                </p>
                                <button 
                                    onClick={() => navigate('/Recipe')}
                                    style={{
                                        background: '#e67e22',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 25px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#d35400'}
                                    onMouseOut={(e) => e.target.style.background = '#e67e22'}
                                >
                                    View Recipe →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Login Project */}
                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '30px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        borderLeft: '5px solid #27ae60'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ 
                                fontSize: '3.5rem',
                                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                                borderRadius: '12px',
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                🔐
                            </div>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#2c3e50', marginBottom: '10px' }}>
                                    Login System
                                </h3>
                                <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '15px' }}>
                                    Basic login form with validation. Still learning about authentication - this is just the frontend part. 
                                    Username is "admin" and password is "admin123" if you want to test it out.
                                </p>
                                <button 
                                    onClick={() => navigate('/Login')}
                                    style={{
                                        background: '#27ae60',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 25px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#229954'}
                                    onMouseOut={(e) => e.target.style.background = '#27ae60'}
                                >
                                    Try Login →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '30px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        borderLeft: '5px solid #95a5a6',
                        opacity: 0.7
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ 
                                fontSize: '3.5rem',
                                background: 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)',
                                borderRadius: '12px',
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                🚧
                            </div>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#7f8c8d', marginBottom: '10px' }}>
                                    More Coming Soon...
                                </h3>
                                <p style={{ color: '#95a5a6', lineHeight: '1.6', marginBottom: '15px' }}>
                                    Got some ideas brewing! Maybe a weather app or a todo list. We'll see what happens.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <button 
                        onClick={() => navigate('/Home')}
                        style={{
                            background: 'transparent',
                            color: '#3498db',
                            border: '2px solid #3498db',
                            padding: '12px 30px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#3498db';
                            e.target.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#3498db';
                        }}
                    >
                        ← Back Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;