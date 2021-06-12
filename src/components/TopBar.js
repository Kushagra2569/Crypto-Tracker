import React from 'react'

function TopBar(props) {
    return (
        <div className='topBar'>
            <button onClick = {function () {
                props.changeCoin('bitcoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Bitcoin-icon.png' alt='bitcoin'></img></button>
            <button onClick = {function () {
                props.changeCoin('ethereum');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Ethereum-icon.png' alt='ethereum'></img></button>
            <button onClick = {function () {
                props.changeCoin('binancecoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Binance-Coin-icon.png' alt='binaceCoin'></img></button>
            <button onClick = {function () {
                props.changeCoin('cardano');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Cardano-icon.png' alt='cardano'></img></button>
            <button onClick = {function () {
                props.changeCoin('dogecoin');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/Dogecoin-icon.png' alt='dogeCoin'></img></button>
            <button onClick = {function () {
                props.changeCoin('vechain');
            }}><img className='coinImg' src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/48/VeChain-icon.png' alt='VeChain'></img></button>
            <button onClick = {function () {
                props.changeCoin('terra-luna');
            }}><img className='coinImg' src='https://cdn.coinranking.com/F-PJdF8Um/LUNA.svg?size=48x48' alt='Luna'></img></button>
        </div>
    )
}

export default TopBar