export const artWork = [
    { id: 3, category: 'comics', src: '/art/comic1.png', title: 'pacific rim: 1' },
    { id: 4, category: 'comics', src: '/art/comic2.png', title: 'pacific rim: 2' },
    { id: 5, category: 'comics', src: '/art/comic3.png', title: 'pacific rim: 3' },
];

export interface Art {
  id: number,
  category: string,
  src: string,
  title: string
}