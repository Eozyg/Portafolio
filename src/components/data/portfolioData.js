/**
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'img/backg.webp',
		title: 'Blizzland',
		skills: ['JavaScript', 'CSS', 'Astro'],
		descripcion:
			'Simulé una landing page para Blizzard Entertainment, con un flujo de ingreso de número, y pin de acceso.',
		demoURL: 'https://eozyg.github.io/blizzland/',
		repoURL: 'https://github.com/Eozyg/blizzland',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/invboda.png',
		title: 'Invitacion casamiento',
		skills: ['JavaScript', 'CSS', 'Astro'],
		descripcion:
			' Es una invitación web interactiva una boda, con toda la información del evento, cuenta regresiva, fotos de los novios, links de ubicación y un formulario para confirmar asistencia, pensada para que el invitado tenga todo a mano y se entusiasme con la fiesta.',
		demoURL: 'https://invitaciondemo.vercel.app/',
		repoURL: 'https://github.com/Eozyg/Invitacion.demo',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'img/std.png',
		title: 'Save the date',
		skills: ['CSS', 'JavaScript', 'Tailwind', 'Astro'],
		descripcion:
			'Cree un portal para vender invitaciones virtuales, con su respectivo contacto,',
		demoURL: 'https://buschfranco.github.io/portalinvitacion/',
		repoURL: 'https://github.com/BuschFranco/portalinvitacion',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/babyshower.png',
		title: 'Invitacion babyshower',
		skills: ['JavaScript', 'CSS', 'Astro'],
		descripcion:
			'Invitación a un cumpleaños de 1 año en Adrogué, con cuenta regresiva, galería de fotos y formulario para confirmar asistencia.',
		demoURL: 'https://eozyg.github.io/Carta-ZOAN/',
		repoURL: 'https://github.com/Eozyg/Carta-ZOAN',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/ZOAN.png',
		title: 'Carta ZOAN',
		skills: ['Astro', 'CSS', 'JavaScript'],
		descripcion:
			'Carta para un restaurante, con menú, carrito de compras y contacto.',
		demoURL: 'https://eozyg.github.io/Carta-ZOAN/',
		repoURL: 'https://github.com/Eozyg/Carta-ZOAN/',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'App Weather',
		skills: ['React', 'Astro' , 'TypeScript'],
		descripcion:
			'es una single-page-like app montada sobre Astro + React + TypeScript, que consume una API de clima moderna (Open-Meteo), hace geocodificación inteligente para provincias y ciudades argentinas y presenta la info en una UI minimalista, responsive y bien pensada para leer el clima de un vistazo.',
		demoURL: 'https://eozyg.github.io/App-Weather/',
		repoURL: 'https://github.com/Eozyg/App-Weather',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
