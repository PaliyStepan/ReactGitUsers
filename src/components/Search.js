import React, {useContext, useState} from "react";
import {AlertContext} from "../Context/alert/alertContext";
import {GithubContext} from "../Context/github/githubContext";

const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const gitHub = useContext(GithubContext);

    const onSubmit = e => {
        if(e.key !== 'Enter') {
           return
        }

        gitHub.clearUsers();

        if(value.trim()) {
            alert.hide();
            //console.log('Make request with:', value)
            gitHub.search(value.trim())
        } else {
            alert.show('Введите данные пользавателя')
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
