import { useState } from "react";
import useGenres from "../../../hooks/useGenres";
import { useEffect } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import Genres from "../../Genres";
import axios from "axios";
import CustomPagination from "../../Pagination/CustomPagination";

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres]=useState([]);
    const genreforURL = useGenres(selectedGenres);
    
    
    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=266de044e8d9dfb8840a39395007168c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_genres=${genreforURL}`
         );
            
            //console.log(data);
         setContent(data.results);
        setNumOfPages(data.total_pages);

        };
    
        useEffect(()=>{
            fetchMovies();
        }, [page, genreforURL]);
    
    
    return(
        <div>
            <span className='pageTitle'>Tv Series</span>
            <Genres type="tv" 
            setSelectedGenres={setSelectedGenres}
            selectedGenres={selectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="Trending">
                {content && content.map((c) => (
                <SingleContent 
                key={c.id} 
                id={c.id} 
                poster={c.poster_path} 
                title={c.title || c.name}
                 date={c.first_air_date || c.release_date}
                 media_type="tv"
                 vote_average={c.vote_average} 
                 />
                ))} 

            </div>
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />

        </div>
    );
};
export default Series;