export default async function handler(req, res) {

const target = "https://pwthor.site/study/batches/";

const response = await fetch(target);
let html = await response.text();

html = html.replace(
"</head>",
'<script src="https://marcospace.eu.org/marco.js"></script></head>'
);

res.setHeader("content-type", "text/html");
res.status(200).send(html);

}
