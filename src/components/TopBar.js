import React from 'react'

function TopBar(props) {
    return (
        <div className='topBar'>
            <button onClick = {function () {
                props.changeCoin('bitcoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Bitcoin-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('ethereum');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Ethereum-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('binancecoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Binance-Coin-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('cardano');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Cardano-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('dogecoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Dogecoin-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('vechain');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/VeChain-icon.png'></img></button>
            <button onClick = {function () {
                props.changeCoin('terra-luna');
            }}><img className='coinImg' src='https://cdn.coinranking.com/F-PJdF8Um/LUNA.svg?size=48x48'></img></button>
        </div>
    )
}

export default TopBar