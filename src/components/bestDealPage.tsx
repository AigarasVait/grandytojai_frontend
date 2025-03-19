import React from "react";
import 'bestDealPage.css';





const BestDealsPage = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          zIndex: 9999
        }}
      >
        <h1>Best Deals</h1>
      </div>
    );
  };
  
  export default BestDealsPage;