let landing = gsap.timeline({ defaults: { duration: 1 } })

landing.fromTo(
	'.landing',
	{ 'clip-path': 'circle(0)' },
	{ duration: 2, 'clip-path': 'circle(100%)' }
)

landing.from('.landing h1', { y: -100, opacity: 0 }, '-=1')

landing.from('.landing a', { y: 100, opacity: 0 }, '<')

let header = gsap.timeline({
	defaults: { duration: 1 },
	scrollTrigger: { trigger: 'header' },
})

header.from('header', {
	x: '-100%',
})

let progress = gsap.timeline({
	defaults: { duration: 1 },
	scrollTrigger: { trigger: '.skills' },
})

progress.from('.skills .progress div span', { duration: 2, width: 0 })
