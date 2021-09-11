import makeApiUrl from "../src/api"
import fs from "fs"

function SitemapXml() {}

export async function getServerSideProps({res}) {
	// get posts
	let posts = []

	const pagesCount = await fetch(makeApiUrl(`/mods/page/1`))
	const pagesCountJson = await pagesCount.json()

	// if request is ok
	if (pagesCountJson.status.error === false) {
		// if count of pages > 1
		if (pagesCountJson.data.pages > 1) {
			for (let p = 1; p <= pagesCountJson.data.pages; p++) {
				const getData = await fetch(makeApiUrl(`/mods/page/${p}`))
				const dataJson = await getData.json()

				if (dataJson.status.error === false) {
					// because it as already array... (but i think there exist better way)
					for (const post of dataJson.data.posts) {
						posts.push(post)
					}
				}
			}
		} else {
			for (const post of pagesCountJson.data.posts) {
				posts.push(post)
			}
		}
	}

	// get static pages
	const staticPages = fs
		.readdirSync("pages/docs")
		.filter((staticPage) => {
			return ![
				"_app.js",
				"_document.js",
				"_error.js",
				"sitemap.xml.js",
				"404.js",
				"500.js",
			].includes(staticPage);
		})
		.map((staticPagePath) => {
			return `${process.env.NEXT_PUBLIC_SITE_URL}/docs/${staticPagePath.split('.')[0]}`;
		});

	// generator
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts.map((post) => {
      	return `
      		<url>
              <loc>${process.env.NEXT_PUBLIC_SITE_URL + '/read/' + post.id}</loc>
              <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
      	`
	})}
	${staticPages.map((page) => {
		return `
      		<url>
              <loc>${page}</loc>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
      	`
	})}
    </urlset>
  `;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SitemapXml