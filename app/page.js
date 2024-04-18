import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <h1>
        <Link href="/meals">MEALS</Link>
      </h1>
      <h1>
        <Link href="/meals/share">SHARE MEALS</Link>
      </h1>
      <h1>
        <Link href="/meals/meal">MEALS&MEAL</Link>
      </h1>
      <h1>
        <Link href="/community">COMMUNITY</Link>
      </h1>
    </main>
  );
}
