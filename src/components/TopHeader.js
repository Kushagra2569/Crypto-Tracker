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
            console.log(coinsList);
        });
    }
    function coinsAutocomplete() {
        if(coinsList != []) {
            console.log('entered coinslist not null');
            coinsList.forEach(coin => {
                let id = coin.id;
                if(id.includes(text)) {
                    console.log(id);
                }
            });
    }
}
    useEffect(() => {
        getAutoCompleteData();
    }, [])
    return (
        <div>
            <div className="TopHeader">
                <div className="searchBar">
                    <input type='text' id='searchInput' value={text} 
                    onChange={e => {setText(e.target.value);
                    coinsAutocomplete();}} 
                    onFocus={ () => {props.setOpen(true)}} onBlur={ () => {props.setOpen(false)}} />
                </div>
                <p>X</p>
            </div>
            {props.open && <SearchListData /> }
        </div>
    )
}

export default TopHeader