import Results from "@/components/Results";
import Test from "@/components/Test";

const API_KEY = process.env.API_KEY;
export default async function Catalog({searchParams, params}){

    const genre = searchParams.genre || "fetchTrending";

    let count = 1;

    const res = await fetch(
        `https://api.themoviedb.org/3/${
            genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
        }?api_key=${API_KEY}&language=en-US&page=${params.id}`,
        { next: { revalidate: 10000 } }
    );

    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    const results = data.results;



    return (
        <div>
            <Results results={results}></Results>
            <Test params={params}></Test>
        </div>
    )
}