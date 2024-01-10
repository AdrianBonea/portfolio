import { getDictionary } from '../dictionaries';

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: string };
}>) {
  const dict = await getDictionary(lang); // en
  return <button>{dict.navbar.name}</button>; // Add to Cart
}
