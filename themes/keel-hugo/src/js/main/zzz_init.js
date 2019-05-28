/**
 * Script initializations
 */

// Responsive iframe videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net', 'www.hulu.com', 'videopress.com/embed/', 'noti.st']
});

// Anchor links on posts
if (document.body.matches('.type-articles.page-single')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#');
}