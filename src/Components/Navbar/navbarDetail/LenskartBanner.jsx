import React from 'react';
const articles = [
    {
      image: 'https://i.imgur.com/7OQZ9B2.png',
      title: 'Blue Light Glasses: Do They Really Work?',
      description:
        'In a world where we spend most of our day in front of screens—laptops, smartphones, tablets, and televisions—eye strain, fatigue, and...',
      author: 'Saloni Bhatia',
      date: 'Apr 9',
      readTime: '4 min read'
    },
    {
      image: 'https://i.imgur.com/8Er8aKZ.png',
      title: 'Game On! The Ultimate Eyewear for Every IPL Fan',
      description:
        'The Indian Premier League (IPL) is not just a cricket tournament; it’s a festival of emotions, a grand spectacle that unites millions of...',
      author: 'Saloni Bhatia',
      date: 'Apr 6',
      readTime: '5 min read'
    },
    {
      image: 'https://i.imgur.com/FbB2MmL.png',
      title: 'How to Match Your Glasses with Your Outfit: A Style Guide',
      description:
        'Your glasses are a focal point, a defining accessory that speaks volumes about your style. They’re not just for clear vision; they’re a...',
      author: 'Saloni Bhatia',
      date: 'Mar 12',
      readTime: '3 min read'
    }
  ];

const LenskartBanner = () => {
  return (
    <div>
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: '1px solid #eee',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Medium</h1>
        <div>
          <a href="#" style={{ marginRight: '20px', color: '#6c63ff', textDecoration: 'none' }}>Sign in</a>
          <button style={{
            border: '1px solid #6c63ff',
            background: 'transparent',
            color: '#6c63ff',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer'
          }}>Get started</button>
        </div>
      </div>

      {/* Banner */}
      <div style={{
        backgroundColor: '#01004d',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px 40px'
      }}>
        {/* Left - Lenskart logo and text */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lenskart_logo.svg/2560px-Lenskart_logo.svg.png"
            alt="Lenskart"
            style={{ width: '120px', marginRight: '30px' }}
          />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '5px', letterSpacing: '2px' }}>join the revolution</h2>
            <p style={{ fontSize: '16px' }}>Find opportunities here: <strong>hiring.lenskart.com</strong></p>
          </div>
        </div>

        {/* Right - 3D text image (screenshot substitute) */}
        <img
          src="https://i.imgur.com/L5tX8Vr.png"
          alt="Experience the World"
          style={{ width: '250px' }}
        />
      </div>

      {/* Navigation */}
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft:"20px",
        padding: '20px 0',
        borderBottom: '1px solid #eee',
        fontSize: '14px',
        color: '#555',
        gap: '20px',
        flexWrap: 'wrap',
        // border:"1px solid black"
      }}>
        {[
          "PEOPLE & CULTURE", "FASHION & LIFESTYLE", "PRODUCT & TECH",
          "RETAIL", "DESIGN & MERCH", "STARTUPS", "MEDIA & PR"
        ].map(item => (
          <span key={item} style={{ cursor: 'pointer' }}>{item}</span>
        ))}
     

      {/* Follow Section */}
      <div style={{ width:"30%",display: 'flex', gap:"20px",position:"absolute", right:"50px" }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        // padding: '20px 40px',
        gap: '10px',
        border:"1px solid black",
          
      }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '200px',
          
          }}
          
        />
         </div>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
          alt="Instagram"
          style={{ width: '24px', height: '24px', cursor: 'pointer',marginLeft:"50px" }}
        />
        <button style={{
          border: '1px solid #6c63ff',
          background: 'transparent',
          color: '#6c63ff',
          padding: '6px 12px',
          borderRadius: '20px',
          cursor: 'pointer'
        }}>Follow</button>
      </div>
      </div>
    </div>
    <div style={{ padding: '40px', fontFamily: 'sans-serif'  }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ width: '25%', minWidth: '280px' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h3 style={{ fontSize: '18px', margin: '15px 0 10px', color: '#111' }}>{article.title}</h3>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6' }}>{article.description}</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
              <div style={{
                backgroundColor: '#2e7d32',
                color: '#fff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                fontWeight: 'bold'
              }}>
                S
              </div>
              <div style={{ fontSize: '14px', color: '#555' }}>
                <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{article.author}</span><br />
                {article.date} · {article.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ padding: '40px', fontFamily: 'sans-serif'  }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ width: '25%', minWidth: '280px' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h3 style={{ fontSize: '18px', margin: '15px 0 10px', color: '#111' }}>{article.title}</h3>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6' }}>{article.description}</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
              <div style={{
                backgroundColor: '#2e7d32',
                color: '#fff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                fontWeight: 'bold'
              }}>
                S
              </div>
              <div style={{ fontSize: '14px', color: '#555' }}>
                <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{article.author}</span><br />
                {article.date} · {article.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ padding: '40px', fontFamily: 'sans-serif'  }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ width: '25%', minWidth: '280px' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h3 style={{ fontSize: '18px', margin: '15px 0 10px', color: '#111' }}>{article.title}</h3>
            <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6' }}>{article.description}</p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
              <div style={{
                backgroundColor: '#2e7d32',
                color: '#fff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                fontWeight: 'bold'
              }}>
                S
              </div>
              <div style={{ fontSize: '14px', color: '#555' }}>
                <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{article.author}</span><br />
                {article.date} · {article.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default LenskartBanner;
