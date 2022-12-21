const baseUrl = "https://masak-apa-tomorisakura.vercel.app";

export async function getMenu(): Promise<any> {
  return fetch(`${baseUrl}/api/recipes`).then((res) => res.json());
}

export async function getDetailMenu(key: string): Promise<any> {
  return fetch(`${baseUrl}/api/recipes/${key}`).then((res) => res.json());
}
