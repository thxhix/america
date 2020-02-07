pageUrl = '/';
urlContents = location.pathname.split("/");
isIndex = (((urlContents[urlContents.length-2] == "") || (urlContents[urlContents.length-2] == "index.php")) && (location.search == ''));
blockId = isIndex ? 'convert-form' : 'open-link';
block = document.getElementById( blockId );
not_found = document.querySelector('.not_found_home');
haveBanners = document.querySelector( '.banner' ) !== null;
timeout = haveBanners ? 5000 : 500;
block.classList.remove( 'hidden' );

if (!isIndex && !not_found) {
	forward();
}
document.getElementById('convert-form').addEventListener('submit', function(e) {
	e.preventDefault();
});
document.getElementById('inputUrl').addEventListener('keyup', function(e) {
	if ( e.keyCode !== 13 ) {
		return;
	}
	e.preventDefault();
	handleUrl();
});



function handleUrl(){

	function setValue(val) {
		document.getElementById("inputUrl").value = val;
	}

	value = document.getElementById("inputUrl").value;

	if (value.match(/^[a-zA-Z\?=\d_-]+$/)) {
		return setValue(window.location.href + value);
	}

	value = value.replace(/.*t\.me./,window.location.href)
		//.replace("http://","https://")
		.replace("@",window.location.href);

		setValue(value);

		console.log(value);
	}

	function getLocation(url) {
		link = document.createElement( 'a' );
		link.href = url;
		return link;
	}

	function forward() {
		//var location = getLocation(pageUrl);
		info = location.pathname.split("/");
		if (+info[info.length-1] > 0) {
			domain = info[info.length-2];
			join_type = info[info.length-3];
		} else {
			domain = info[info.length-1];
			join_type = info[info.length-2];
		}
		str = '';
		switch (join_type) {
			case "socks":
			str = "tg://socks" + location.search;
			break;
			case "joinchat":
			str = "tg://join?invite=" + domain;
			break;
			case "addstickers":
			str = "tg://addstickers?set=" + domain;
			break;
			case "proxy":
			str = "tg://" + domain + location.search;
			break;
			default:
			str = "tg://resolve?domain=" + domain;
			if (+info[info.length-1] > 0) {
				str += "&post=" + info[info.length-1]
			}
		}

		document.getElementById("link").href = str;
		setTimeout(function() {
			window.location.replace(str);
		}, timeout );
	}

	# Do not remove this line or mod_rewrite rules and search engine friendly URLs will stop working
	RewriteEngine   on

	RewriteCond %{HTTPS} =off 
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [QSA,L]
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-l
RewriteCond %{REQUEST_URI} !^/[^/\.]*\index.php$
RewriteRule ^(.*?)/?$ index.php [L,QSA]