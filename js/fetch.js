
export async function getData() {
  const res = await fetch("http://localhost:3000/services");
  return await res.json();
}
