console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str,name,quote) {
	quote = quote.replace(/&/g,"&amp;")
		.replace(/</g,"&lt;")
		.replace(/>/g,"&gt;")
		.replace(/'/g,"&apos;")
		.replace(/"/g,"&quot;")
	return (str[0] + name + str[1] + quote + str[2])
}
