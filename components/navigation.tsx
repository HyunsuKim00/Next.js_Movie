"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css"

export default function Navigation() {
    const path = usePathname(); 
    // usePathname() : 현재 페이지의 경로(path)를 문자열로 반환
    // 클라이언트 컴포넌트에서만 사용 가능
    
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Home</Link> {path==='/'?"🔥":""}</li> 
                <li><Link href='/about-us'>About us</Link>{path==='/about-us'?"🔥":""}</li>
            </ul>
        </nav>
    )
};