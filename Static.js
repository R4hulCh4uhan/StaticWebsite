async function fetchData() {
    const response = await fetch('https://60xs92p1r8.execute-api.ap-south-1.amazonaws.com/StaticStage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'value' })
    });
    const data = await response.json();
    console.log(data);
}
