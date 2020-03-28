import React, {useContext, useState} from "react";
import {AlertContext} from "../Context/alert/alertContext";

const Search = () => {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);

    const onSubmit = e => {
        if(e.key !== 'Enter') {
           return
        }

        if(value.trim()) {
            console.log('Make request with:', value)
        } else {
            show('Введите данные пользавателя')
        }
    };
    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователья...."
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
};

export default Search;
