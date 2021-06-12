import React from "react";
import Dataview from "./Dataview";
import Chart from "./Chart"

function MiddleContent(props) {
    function getCoinName () {
        const coinName = props.selCoin[0].toUpperCase() + props.selCoin.slice(1);
        return coinName;
    }
  return (
    <div className="middleContent">
      <p id="middleContentHeader">{getCoinName()}</p>
      <div className="middleContentWrapper">
        <Dataview header={"Market Cap"} value={props.coinProp[0].marketCap} />
        <Dataview header={"Market Cap Rank"} value={props.coinProp[0].marketCapRank} />
        <Dataview header={"Current Price"} value={props.coinProp[0].price} />
        <Dataview header={"24 Hour High"} value={props.coinProp[0].high24h} />
        <Dataview header={"24 Hour Low"} value={props.coinProp[0].low24h} />
      </div>
      <div className="middleContentBottom">
          <div className="middleContentBottomLeft">
            <Dataview header={"Price Change 24 Hours"} value={props.coinProp[0].priceChange24h} />
            <Dataview header={"Price Change 24 Hours %"} value={props.coinProp[0].priceChange24hper} />
          </div>
          <div className="middleContentBottomRight">
              <Chart coinProp={props.coinProp}/>
          </div>
      </div>
    </div>
  );
}

export default MiddleContent;
