import supabase from "./supabse";

export async function getUrls(user_id) {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .eq("url_id", urlIds);

  if (error) {
    console.error(error.message);
    throw new Error("Unable to load Clicks");
  }

  return data;
}
