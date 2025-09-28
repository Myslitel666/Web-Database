export async function getTechnology(name) {
    const response = await fetch(`/api/technology?name=${name}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data.technology; // одна технология
}