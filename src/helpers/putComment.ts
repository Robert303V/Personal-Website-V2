import CommentType from "../types/commentType";

async function addCommentToBlogAPI(slug: string, comment: CommentType) {
  try {
    const response = await fetch(`http://localhost:3000/api/putComment/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('API Comment Addition Failed');
    }

    return response.json();
  } catch (err) {
    console.error('Error Adding Comment via API: ', err);
    return null;
  }
}

export default addCommentToBlogAPI;