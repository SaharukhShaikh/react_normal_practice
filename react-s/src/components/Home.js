import React from 'react';

function Home () {
  return (
    <div>
        <div className='add-to-cart'>
            <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f6d2.png"/>
        </div>
      <h1>Home</h1>
      <div className='cart-wrapper'>
          <div className='img-wrapper item'>
              <img src="https://static.vecteezy.com/system/resources/previews/007/627/562/original/black-road-bike-silhouette-icon-sport-bike-simple-glyph-pictogram-mountain-bicycle-icon-modern-race-cycle-symbol-healthy-ride-outdoor-sign-travel-on-bicycle-logo-isolated-illustration-vector.jpg" />
          </div>
          <div className='text-wrapper item'>
              <span>Cycle:</span>
              <span>$1000</span>
          </div>
          <div className='btn-wrapper item'>
              <button>Add To Cart</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
