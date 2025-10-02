import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/recipe', { withCredentials: true })
      .then(res => {
        console.log(res.data.meals[0]);
        setRecipe(res.data.meals[0]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('Couldn\'t load the recipe. Make sure the server is running!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'spin 2s linear infinite' }}>🍳</div>
          <p style={{ fontSize: '1.3rem', color: '#8b6914', fontFamily: 'Georgia, serif' }}>Loading recipe...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', maxWidth: '500px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>😕</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>Oops!</h2>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>{error || 'Recipe not found'}</p>
        </div>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`] && recipe[`strIngredient${i}`].trim()) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`] || ''
      });
    }
  }

  const instructions = recipe.strInstructions
    .split('\r\n')
    .filter(step => step.trim())
    .map(step => step.trim());

  return (
    <div style={{ minHeight: '100vh', background: '#fff8f0' }}>
      {/* Hero Image */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          padding: '40px 20px'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '12px',
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              {recipe.strMeal}
            </h1>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                🌍 {recipe.strArea}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                🍗 {recipe.strCategory}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Intro */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#5d4e37', 
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto',
            fontStyle: 'italic'
          }}>
            This Chicken Handi has the perfect blend of spices and that creamy texture that makes it so comforting. Takes a bit of time but totally worth it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Ingredients */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            height: 'fit-content',
            position: 'sticky',
            top: '20px'
          }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '700', 
              color: '#d35400',
              marginBottom: '20px',
              fontFamily: 'Georgia, serif',
              borderBottom: '3px solid #f39c12',
              paddingBottom: '10px'
            }}>
              What You'll Need
            </h2>
            <div>
              {ingredients.map((item, index) => (
                <div key={index} style={{
                  padding: '10px 0',
                  borderBottom: index < ingredients.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <span style={{ color: '#2c3e50', fontWeight: '500', flex: 1 }}>
                      • {item.ingredient}
                    </span>
                    <span style={{ color: '#7f8c8d', fontSize: '0.9rem', marginLeft: '10px', textAlign: 'right' }}>
                      {item.measure}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Steps */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#d35400',
                marginBottom: '25px',
                fontFamily: 'Georgia, serif',
                borderBottom: '3px solid #f39c12',
                paddingBottom: '10px'
              }}>
                How to Make It
              </h2>
              <div>
                {instructions.map((step, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    gap: '15px', 
                    marginBottom: index < instructions.length - 1 ? '25px' : '0'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
                      color: 'white',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(243, 156, 18, 0.3)'
                    }}>
                      {index + 1}
                    </div>
                    <p style={{ 
                      color: '#34495e', 
                      lineHeight: '1.6', 
                      margin: 0,
                      fontSize: '0.98rem'
                    }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            {recipe.strYoutube && (
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
              }}>
                <h2 style={{ 
                  fontSize: '1.6rem', 
                  fontWeight: '700', 
                  color: '#d35400',
                  marginBottom: '20px',
                  fontFamily: 'Georgia, serif'
                }}>
                  Watch How It's Done
                </h2>
                <div style={{ 
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src={recipe.strYoutube.replace('watch?v=', 'embed/')}
                    title="Recipe Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Serving Tip */}
            <div style={{
              background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: '#2c3e50',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif'
              }}>
                Serving Tip
              </h3>
              <p style={{ 
                color: '#34495e', 
                lineHeight: '1.6',
                margin: 0,
                fontSize: '1rem'
              }}>
                Best enjoyed with some warm naan or rotis! I like to add a side of cooling raita 
                and maybe some pickled onions. Perfect for a cozy dinner with family or friends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        background: '#34495e', 
        color: 'white', 
        padding: '30px 20px',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>
          Made with love and lots of spices!
        </p>
        <p style={{ margin: 0, color: '#95a5a6', fontSize: '0.9rem' }}>
          Recipe data from TheMealDB
        </p>
      </div>
    </div>
  );
}

export default Recipe;