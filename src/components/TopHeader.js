import React, {useState, useEffect} from 'react'
import SearchListData from './SearchListData'

function TopHeader(props) {
    const [text, setText] = useState('');
    const [coinsList, setCoinsList] = useState([]);
    let coinsSug = [];

    function getAutoCompleteData() {
        let url =
        "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCoinsList([...data]);
        });
    }
    function coinsAutocomplete() {
        let autoCompleteCounter = 0;
        if(coinsList !== []) {
            coinsList.forEach(coin => {
                if(autoCompleteCounter < 50) {
                    let id = coin.id;
                    if(id.startsWith(text)) {
                        coinsSug.push(id);
                        autoCompleteCounter += 1;
                    }
                }
            });
        }
    }
    useEffect(() => {
        getAutoCompleteData();
    }, [])

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