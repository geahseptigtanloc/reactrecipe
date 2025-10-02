import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)', padding: '40px 20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '40px' }}>
                    <h1 style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: '800', 
                        color: '#2c3e50',
                        marginBottom: '20px',
                        fontFamily: 'Georgia, serif'
                    }}>
                        Welcome to My Home!
                    </h1>
                    <p style={{ 
                        fontSize: '1.3rem', 
                        color: '#546e7a',
                        maxWidth: '700px',
                        margin: '0 auto 30px',
                        lineHeight: '1.6'
                    }}>
                        I'm learning web development and having fun building stuff. 
                        Check out what I've been working on lately!
                    </p>
                    <button 
                        onClick={() => navigate('/Portfolio')}
                        style={{
                            background: '#3498db',
                            color: 'white',
                            border: 'none',
                            padding: '15px 35px',
                            fontSize: '1.1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#2980b9';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = '#3498db';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        See My Projects
                    </button>
                </div>

                {/* Feature Cards */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {/* Portfolio Card */}
                    <div 
                        onClick={() => navigate('/Portfolio')}
                        style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '30px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            border: '2px solid transparent'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = '#3498db';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💼</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2c3e50', marginBottom: '12px' }}>
                            My Portfolio
                        </h3>
                        <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
                            All my projects in one place. Still adding more stuff as I learn!
                        </p>
                    </div>

                    {/* Calculator Card */}
                    <div 
                        onClick={() => navigate('/Calculator')}
                        style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '30px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            border: '2px solid transparent'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = '#9b59b6';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧮</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2c3e50', marginBottom: '12px' }}>
                            Calculator
                        </h3>
                        <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
                            A simple calculator I built. Does basic math - nothing fancy!
                        </p>
                    </div>

                    {/* Recipe Card */}
                    <div 
                        onClick={() => navigate('/Recipe')}
                        style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '30px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            border: '2px solid transparent'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = '#e67e22';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🍗</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2c3e50', marginBottom: '12px' }}>
                            Recipe Page
                        </h3>
                        <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>
                            Love cooking! Made a page for my favorite Chicken Handi recipe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;