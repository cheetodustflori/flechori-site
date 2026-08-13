export const artWork = [
    { id: 3, category: 'comics', src: '/art/comic1.png', title: 'pacific rim: 1' },
    { id: 4, category: 'comics', src: '/art/comic2.png', title: 'pacific rim: 2' },
    { id: 5, category: 'comics', src: '/art/comic3.png', title: 'pacific rim: 3' },
    { id: 6, category: 'portraits', src: '/art/dig1.png', title: 'gurl 1' },
    { id: 7, category: 'portraits', src: '/art/dig2.png', title: 'gurl 2' },
    { id: 8, category: 'portraits', src: '/art/dig3.png', title: 'gurl 3' },
    { id: 9, category: 'portraits', src: '/art/dig4.png', title: 'gurl 4' },
    { id: 10, category: 'doodles', src: '/art/doodle1.png', title: 'modulo' },
    { id: 11, category: 'doodles', src: '/art/doodle2.png', title: 'yutaa' },
    { id: 12, category: 'doodles', src: '/art/doodle3.png', title: 'megumi; gojo' },
    { id: 13, category: 'doodles', src: '/art/doodle4.png', title: 'megumi;  blackstar' },
    { id: 14, category: 'doodles', src: '/art/doodle5.png', title: 'maki ma kween' },
    { id: 15, category: 'doodles', src: '/art/doodle6.png', title: 'yutaaa' },
    { id: 16, category: 'doodles', src: '/art/doodle7.png', title: 'snk' },
    { id: 17, category: 'doodles', src: '/art/doodle8.png', title: 'ooof' },
];

export interface Art {
  id: number,
  category: string,
  src: string,
  title: string
}