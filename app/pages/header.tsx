"use client";

export default function Header() {
  function getAPI() {
    fetch("/api/hello").then((res) => res.json()).then((finalRes) => {
      console.log(finalRes);
    });
  }

  return (
    <main>
      <h1>NextJs Test</h1>
      <button onClick={getAPI}>Subscribe</button>
    </main>
  );
}
