export const get = async (data) => {
    const url = "http://bmw/php/jonathan.php";

    const req = await fetch(url, {
        method: "POSt",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await req.json()
}