import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id: string) {
        const response = await fetch(`${API_URL}/${id}/videos`);
        return response.json();
}

// videos가 배열인지 객체인지는 그것을 제공해주는 api에 따라 다름.
export default async function MovieVideos({id}: {id:string}) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map(video => 
            <iframe className={styles.iframe} key={video.id} src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}/>)}
        </div>
    )
}