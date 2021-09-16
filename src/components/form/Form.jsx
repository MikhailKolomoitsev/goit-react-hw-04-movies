import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Form({ onSubmit }) {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        onSubmit(query)
        e.target.reset()
        setQuery('')
    }
    return (
        <form className='form'
            onSubmit={handleSubmitForm}
        >
            <label htmlFor="">Find your movie
                <input
                    value={query}
                    type="text"
                    onChange={handleInputChange}
                    placeholder='Movie Name'
                />
            </label>
            <button type='submit'>Start Search</button>

        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
}