import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
    title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 브라우저에서는 fetching하지 않음.
// 여기 백엔드에서 fetching한 결과를 서버에서 클라이언트의 브라우저로 보내줌.
async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie)=>(
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path}/>
            ))}
        </div>
    );
}