import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext';
import {Link} from 'react-router-dom';
import Repos from "../components/Repos";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-xl-3 text-center">
              <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 border d-block pt-4"
                >
                <img
                  src={avatar_url}
                  alt={name}
                  className="profile-ava mb-3"
                />
                <h1 className="mb-4 profile-name">{name}</h1>
              </a>
              {location && <div className="text-left">

                <p className="mb-1">Местоположение:</p> <p> {location}</p>
              </div>}
            </div>
            <div className="col-12 col-xl-9">
              {
                bio && <Fragment>
                  <h3 className="mb-4">BIO</h3>
                  <p className="mb-4">{bio}</p>
                </Fragment>
              }

              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <div className="badge badge-primary mr-2 p-2 mb-1">Подписчики: {followers}</div>
              <div className="badge badge-success mr-2 p-2 mb-1">Подписан: {following}</div>
              <div className="badge badge-info mr-2 p-2 mb-1">Репозитории: {public_repos}</div>
              <div className="badge badge-dark mr-2 p-2 mb-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-4">Repos list</h2>
      <Repos repos={repos}></Repos>
    </Fragment>
  )
};
