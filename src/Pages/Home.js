import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_,i) => i);

    return(
        <>
            <h1 className="mb-5 mt-4">Home Page</h1>
            <Search />
            <div className="row">
                {
                    cards.map((card,index)=> {
                        return(
                            <div key={index} className="col-sm-4 mb-4">
                                <Card />
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
};

export default Home;