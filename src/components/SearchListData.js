import React, {useState, useEffect} from 'react'

function SearchListData(props) {

    useEffect(() => {
        console.log(props.coinsSuggestion);
    }, [])
    //TODO: fix the fast type name property undefined error 
    return (
        <div className='searchListDataView'>
            <button id="SelectCoinButton"><SelectCoin name={props.coinsSuggestion[0].name}/></button>
        </div>
    )
}


function SelectCoin(props) {
    return (
        <div className='SelectCoinDiv'>
            {props.name}
        </div>
    )
}


export default SearchListData