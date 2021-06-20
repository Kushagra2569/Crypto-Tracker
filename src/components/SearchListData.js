import React, {useState, useEffect} from 'react'

function SearchListData(props) {

    return (
        <div className='searchListDataView'>
            {props.coinsSuggestion.map(coin => (
                <button id="SelectCoinButton"><SelectCoin changeCoin={props.changeCoin} coin={coin}/></button>
            ))}
        </div>
    )
}


function SelectCoin(props) {
    if(props.coin) {
        return (
            <div className='SelectCoinDiv' onMouseDown={() => {
                props.changeCoin(props.coin.name);
            }}>
                {props.coin.name}
            </div>
        )
    }
    else {
        return (
            <div className='SelectCoinDiv'>
                <p>Fetching Coin Details</p>
            </div>
        )
    }
}


export default SearchListData