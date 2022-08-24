export async function getAllZoos() {
    const response = await fetch('https://localhost:7044/zooitems');
    return await response;
}

export async function createZoo(data) {
    const response = await fetch(`https://localhost:7044/zooitems`, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export const handleSaveToPC = (jsonData, filename) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
}