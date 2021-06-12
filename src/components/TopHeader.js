import React, {useState, useEffect} from 'react'
import SearchListData from './SearchListData'

function TopHeader(props) {
    const [text, setText] = useState('');
    const [coinsList, setCoinsList] = useState([]);
    const [coinsSug, setCoinsSug] = useState([])

    function getAutoCompleteData() {
        let url =
        "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCoinsList([...data]);
            setCoinsSug([]);
        });
    }
    function coinsAutocomplete() {
        let autoCompleteCounter = 0;
        let newArray = [];
        if(coinsList !== []) {
            coinsList.forEach(coin => {
                if(autoCompleteCounter < 50) {
                    let id = coin.id;
                    if(id.startsWith(text)) {
                        newArray.push({name:id,symbol:coin.symbol});
                        autoCompleteCounter += 1;
                    }
                }
            });
        }
        setCoinsSug(newArray);
    }
    function populateCoinsSug() {
        let autoCompleteCounter = 0;
        let newArray = [];
        if(coinsList !== []) {
            coinsList.forEach(coin => {
                if(autoCompleteCounter <= 5) {
                    newArray.push({name:coin.id,symbol:coin.symbol});
                    autoCompleteCounter += 1;
                }
            });
        }
        setCoinsSug(newArray);
    }
    useEffect(() => {
        getAutoCompleteData();
    }, [])

    useEffect(() => {
        populateCoinsSug();
    },[coinsList])

    useEffect(() => {
        coinsAutocomplete();
    },[text])

    return (
        <div>
            <div className="TopHeader">
                <div className="searchBar">
                    <input type='text' id='searchInput' value={text} 
                    onChange={e => {setText(e.target.value);
                    }} 
                    onFocus={ () => {props.setOpen(true)}} onBlur={ () => {props.setOpen(false)}} />
                </div>
                <p>X</p>
            </div>
            {props.open && <SearchListData coinsSuggestion={coinsSug}/> }
        </div>
    )
}

export default TopHeader