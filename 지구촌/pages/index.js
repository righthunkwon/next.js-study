import { fetchCountries } from '@/api';
import CountryList from '@/components/CountryList';
import Searchbar from '@/components/Searchbar';
import Head from 'next/head';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>지구촌</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='지구촌' />
        <meta property='og:description' content='전 세계 국가들의 정보를 확인해보세요' />
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
