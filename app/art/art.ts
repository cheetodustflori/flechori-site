const artCategories = [
  { slug: 'doodles', title: 'Doodles', icon: 'app-6.svg' },
  { slug: 'portraits', title: 'Digital Portraits', icon: 'app-5.svg' },
  { slug: 'comics', title: 'Comics', icon: 'app-2.svg' },
];

// // Inside your return:
// {artCategories.map((cat) => (
//   <li key={cat.slug} className="...">
//     <img src={cat.icon} />
//     <Link href={`/art/${cat.slug}`}>{cat.title}</Link>
//   </li>
// ))}