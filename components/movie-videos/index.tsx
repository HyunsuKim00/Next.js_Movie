import { getVideos } from "../../lib/api";
import styles from "./movie-videos.module.css";

export default async function MovieVideos({id}: {id:string}) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map(video => 
            <iframe 
                className={styles.iframe} 
                key={video.id} 
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
            />)}
        </div>
    )
} 