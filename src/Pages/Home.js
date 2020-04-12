import React, {Fragment, useContext} from 'react';
import {Search} from '../components/Search';
import {Card} from '../components/Card';
import {GithubContext} from '../context/github/githubContext';
import Loader from "../components/Loader";

export const Home = () => {
  const {loading, users} = useContext(GithubContext);


  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading
          ? <div className="col-12 text-center">  <Loader /> </div>
          : users.map(user => (
            <div className="col-md-6 col-lg-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        }
      </div>

    </Fragment>
  )
};
