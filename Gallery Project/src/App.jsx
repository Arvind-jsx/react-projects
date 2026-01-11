import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=15`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("API Error");

        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log("Fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, [page]);

  return (
    <>
      {loading && <h1>Loading...</h1>}

      <div className="cards">
        {data.map(item => (
          <img key={item.id} src={item.download_url} width="200" />
        ))}
      </div>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
}

export default App;
