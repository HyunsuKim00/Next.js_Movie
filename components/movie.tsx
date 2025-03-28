"use client"
// image의 onClick은 백엔드 서버에 존재하지 않음.

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
    title:string;
    id:string;
    poster_path:string;
}

export default function Movie({title,id,poster_path}: MovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`)
        // 사용자를 지정된 URL로 네비게이트(이동) 시킴.
        // id는 부모 컴포넌트(home/page.tsx)로부터 받은 props
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}