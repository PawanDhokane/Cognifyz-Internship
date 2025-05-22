document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const apiKey = "bef76fd9467145faa840aaeceacb5333d"; //Use Your API key, THis is a dummy key for security purposes :) 
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`;

    async function fetchNews() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status !== "ok") {
                throw new Error("Failed to fetch news");
            }

            newsContainer.innerHTML = "";

            data.articles.forEach(article => {
                const articleEl = document.createElement("article");
                articleEl.classList.add("news-article");

                articleEl.innerHTML = `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage || ''}" alt="News Image" style="max-width:100%; height:auto;" />
                    <p>${article.description || "No description available."}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;

                newsContainer.appendChild(articleEl);
            });
        } catch (error) {
            newsContainer.innerHTML = `<p>Failed to load real news. Please check your API key or network.</p>`;
            console.error("Error fetching real news:", error);
        }
    }

    fetchNews();
});
