import CommentType from "../types/commentType";

async function addCommentToPortfolioAPI(slug: string, comment: CommentType) {
  try {
    const response = await fetch(
      `https://robert303v.vercel.app/api/putPortfolioComment/${slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Error Adding Comment via APIiIII");
    }

    return response.json();
  } catch (err) {
    console.error("Error Adding Comment via API: ", err);
    return null;
  }
}

export default addCommentToPortfolioAPI;
