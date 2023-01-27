import { useRouter } from "next/router";
import React from "react";
import { useGetContentByIdQuery } from "../../app/services/animeApi";

const AnimeInfoPage = () => {
  const { query } = useRouter();
  const { type, id } = query;

  const { data, isLoading } = useGetContentByIdQuery({ type, id });

  if (isLoading) return "Loading...";

  console.log(data);

  return <div>AnimeInfoPage</div>;
};

export default AnimeInfoPage;
