import React, {useState, useEffect} from 'react'

function SearchListData(props) {

    useEffect(() => {
        console.log(props.coinsSuggestion);
    }, [])
    
    return (
        <div className='searchListDataView'>
            {props.coinsSuggestion[0]}
        </div>
    )
}

export default SearchListData