import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h2>This is a category {categoryNews.length}</h2>
    </div>
  );
};

export default Category;
