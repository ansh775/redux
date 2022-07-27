import React from 'react';

function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>Items : {props.dataOfcard.length}</h1>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://e7.pngegg.com/pngimages/655/361/png-clipart-mobile-phone-display-blank-mobile-phone-white.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addTocartDatas({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              props.removeTocartDatas({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
