import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}} : IParams) {
    // 여기의 id는 서버에서 직접 Props를 받는 형식
    // 부모 컴포넌트로부터 받은 id가 아님.
    const movie = await getMovie(id)
    return{
        title: movie.title
    }
}

export default function MovieDetail({params: {id},} : IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}
