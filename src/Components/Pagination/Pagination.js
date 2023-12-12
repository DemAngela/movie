import React, {useEffect, useRef, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import './Pagination.css'
import right from '../assets/right-arrow-regular-24.png'
import left from '../assets/left-arrow-regular-24.png'


const Pagination = ({onClick}) => {
    const newArr = new Array(10).fill(0)
    const [pageParam] = useSearchParams('page')
    const [active, setActive] = useState(+pageParam.get('page') || 1)
    const listRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [active])

    const handleChange = (e) => {
        setActive(Number(e))
        onClick(Number(e))

    }

    return (
        <div className={'Pagination'}>
         <button
             className={'PaginationPrevBtn'}
             disabled={active === 1}
            onClick={() => handleChange(active - 1)}
         ><img src={left} alt=""/></button>
            <div ref={listRef}    className={'pagonationInner'}>
                {
                    newArr.map((item, index) =>
                        <button
                            className={'PaginationNumberBtn'}
                            style= {{background: active === index +1 ? 'rgba(38, 16, 93, 0.65)' : 'rgba(46, 44, 47, 0.32)'}}
                            onClick={() => handleChange(index + 1)}
                            key={index}
                        >
                            {index + 1}
                        </button>
                    )
                }
            </div>
         <button
             className={'PaginationNextBtn'}
             disabled={active === 10}
            onClick={() => handleChange(active + 1)}
         ><img src={right} alt=""/></button>
        </div>
    );
};

export default Pagination;