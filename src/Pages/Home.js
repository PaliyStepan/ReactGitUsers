import React, {useContext} from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../Context/github/githubContext";

const Home = () => {
    const {loading, users} = useContext(GithubContext);

    return(
        <>
            <h1 className="mb-5 mt-4">Home Page</h1>
            <Search />
            <div className="row">
                {
                    loading
                    ?  <div className="text-center">Загрузка...</div>
                     : users.map(user=> (
                            <div key={user.id} className="col-sm-6 col-md-4 mb-4">
                                <Card user={user} />
                            </div>
                        ))
                }

            </div>
        </>
    )
};

export default Home;