import React, {Fragment, useContext, useEffect} from "react";
import {GithubContext} from "../Context/github/githubContext";
import {Link} from "react-router-dom";

const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
    }, [])

    if (loading) {
        return <div className="text-center"> Загрузка...</div>
    }

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos,
        public_gists
    } = user;

    return(
        <Fragment>
            <Link to="/" className="btn btn-link">Вернуться на главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name}/>
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url} target="_blank"  rel="noopener noreferrer" className="btn btn-dark">Открыть профиль</a>
                            <ul>
                                {login && <li> <strong>Username:</strong> {login}
                                </li>}
                                {company && <li> <strong>Компания:</strong> {company}
                                </li>}
                                {blog && <li> <strong>Website:</strong> {blog}
                                </li>}
                            </ul>
                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-success">Подписан: {following}</div>
                            <div className="badge badge-info">Репозитории: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Profile;