import React from 'react'

const SearchBox = ({value, setSearchValue}) => {
    return (
        <div className="col col-sm-4">
            <input value={value}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Type to search...' className="form-control" ></input>
        </div>
    )
}

export default SearchBox
