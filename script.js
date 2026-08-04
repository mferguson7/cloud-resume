document.addEventListener("DOMContentLoaded", async function () {
    const visitorText = document.getElementById("visitor-count");

    try {
        const response = await fetch(
            "https://1fesh3ojk0.execute-api.us-east-1.amazonaws.com/Visitor-count"
        );

        const data = await response.json();

        visitorText.textContent = `Visitor Count: ${data.count}`;
    } catch (error) {
        console.error(error);
        visitorText.textContent = "Visitor Count: Error";
    }
});