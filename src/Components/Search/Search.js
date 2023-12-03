    import React, {useEffect, useState} from "react";
    import './Search.css'
    import lupa from "../assets/lupa.png"
    import axios from "axios";
    import {API_KEY, BASE_URL} from "../../config/config";
    import {Link} from  "react-router-dom";
    const Search = (e) => {
        const [search, setSearch] = useState('')

        const handleSearch = (e) => {
            setSearch(e.target.value)
        }


        useEffect(() => {
            const delayDebounceFn = setTimeout(() => {
                if (search.length > 3) {
                    axios(`${BASE_URL}search/movie?api_key=${API_KEY}&language=ru-RU&query=${search}&page=1&include_adult=false`)
                        .then(({data}) => console.log(data))
                }
            },3000)

            return () => clearTimeout(delayDebounceFn)
        }, [search]);

        return (
            <>
                <input type="text" value={search} onChange={handleSearch}/>
                <Link to={search.length > 3 ? `/search?query=${search}` : "#"} onClick={handleSearch}>
                    <button className={"searchBtn"}><img className={'imgBtn'} src={lupa} alt=""/></button>
                </Link>

            </>
        )
    }

    export default Search