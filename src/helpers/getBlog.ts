async function GetBlog(slug: string) {
  try {
    const response = await fetch(`https://robert303v.vercel.app/api/getPost/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("API Blog Fetch Has Failed");
    }

    return response.json();
  } catch (err) {
    console.error("Error Getting Data From DB: ", err);
    return null;
  }
}

export default GetBlog;
