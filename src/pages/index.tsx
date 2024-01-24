import HomeView from "@/views/HomeView";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherApp</title>
        <meta name="description" content="App to check the weather" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeView />
    </>
  );
}
