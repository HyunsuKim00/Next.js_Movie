export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 영화 목록 가져오기
export async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// 영화 상세 정보 가져오기
export async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}

// 영화 비디오 가져오기
export async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
} 