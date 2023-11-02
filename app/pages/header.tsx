'use client';

export default function Header() {

    function getAPI(){
        fetch("/api/hello").then((res) => {
            console.log(res)
        })
    }


  return (
    <main>
        <h1>NextJs Test</h1>
        <button onClick={getAPI}>Subscribe</button>
    </main>
  )
}
