import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Form({ onSubmit }) {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmitForm = () => {
        e.preventDefault();
    }
    return ()
}