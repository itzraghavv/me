export const getGithubData = async () => {
  try {
    const res = await fetch(
      "https://github-contributions-api.deno.dev/itzraghavv.json",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return new Error("Failed to fetch Github Data");
    }

    const data = await res.json()

    return data;
  } catch (error) {
    return Response.json({
      error: "failed to retrive github data",
      message: error,
    });
  }
};

