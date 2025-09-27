export async function getTechnologies() {
    const response = await fetch(`/api/technologies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    return data.technologies;
}