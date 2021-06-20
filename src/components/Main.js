import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import MiddleContent from "./MiddleContent";
import TopHeader from './TopHeader'

function Main() {
  function getData(newCoin) {
    let url =
    "https://api.coingecko.com/api/v3/coins/" + newCoin + "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          let newArr = [...coinProp];
          newArr[0].price = data.market_data.current_price.inr;
          newArr[0].marketCap = data.market_data.market_cap.inr;
          newArr[0].marketCapRank = data.market_data.market_cap_rank;
          newArr[0].high24h = data.market_data.high_24h.inr;
          newArr[0].low24h = data.market_data.low_24h.inr;
          newArr[0].priceChange24h = data.market_data.price_change_24h;
          newArr[0].priceChange24hper = data.market_data.price_change_percentage_24h;
          setCoinProp(newArr);
          console.log(coinProp[0].price);
      });
  }

  function changeSelCoin(coinName) {
    setselCoin(coinName);
    getData(coinName);
  }
  const [selCoin, setselCoin] = useState("ethereum");
  const [coinProp, setCoinProp] = useState([{price:"000", marketCap:"000", marketCapRank:"0", high24h:"000", low24h:"000", priceChange24h:"00", priceChange24hper:"0%"}]);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
        getData(selCoin);
    }, 115000);
    
    return () => clearInterval(timer);
  });

  return (
      <div >
        <div className="topDiv">
            <TopHeader changeCoin={changeSelCoin} open={open} setOpen={setOpen}/>
        </div>
        <div className="maindiv">
            <TopBar changeCoin={changeSelCoin} />
            <MiddleContent coinProp={coinProp} selCoin={selCoin}/>
        </div>
      </div>
  );
}

export default Main;
