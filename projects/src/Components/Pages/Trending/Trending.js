import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../../Pagination/CustomPagination";

const Trending = () =>{
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=266de044e8d9dfb8840a39395007168c&page=${page}`        
            );

        setContent(data.results);

    };

    useEffect(() => {
        window.scroll(0,0);
        fetchTrending();
    }, [page]);


    return(
        <div>
            <span className='pageTitle'>Trending Today</span>
            
            <div className="Trending">
                {content && content.map((c) =>(
                <SingleContent 
                key={c.id} 
                id={c.id} 
                poster={c.poster_path} 
                title={c.title || c.name}
                 date={c.first_air_date || c.release_date}
                 media_type={c.media_type}
                 vote_average={c.vote_average} 
                 />
                ))} 

            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );

};
export default Trending;