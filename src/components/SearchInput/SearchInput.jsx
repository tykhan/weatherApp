import React, { useState, useRef } from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";

import './SearchInput.scss'

export const LocationSearchInput = () => {
    const [address, setAddress] = useState('');
    const inputRef = useRef(null);

    const handleChange = (address) => {
        setAddress(address);
    };

    const handleSelect = (address) => {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => console.log("Success", latLng, address))
            .catch((error) => console.log("Error", error));
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                console.log(suggestions, 'ssugest');
                return (
                <div>
                    <div className="input-container">
                        <input
                            ref={inputRef}
                            {...getInputProps({
                                placeholder: "Search places",
                                className: "location-search-input",
                            })}
                        />
                        <div
                            onClick={() => inputRef.current.focus()}
                            className="search-icon"
                        ></div>
                    </div>
                    {!!suggestions.length && 
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item1";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            )}}
        </PlacesAutocomplete>
    );
}
