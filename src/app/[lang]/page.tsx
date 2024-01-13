type PageProps = {
  params: { lang: 'en' | 'ro' };
};

export default function Page({ params: { lang } }: Readonly<PageProps>) {
  return <button className='text-headline'>FR</button>;
}
