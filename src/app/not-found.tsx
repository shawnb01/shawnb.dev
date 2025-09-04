import Link from "next/link";

export default function NotFound() {
  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      <div className="bg-primary mb-8 flex w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
        <div className="bg-destructive flex flex-col items-center justify-center px-8 py-8">
          <span className="text-destructive-foreground text-6xl font-extrabold">
            404
          </span>
          <span className="text-destructive-foreground mt-2 text-lg font-medium">
            Error
          </span>
        </div>
        <div className="bg-primary w-px" />
        <div className="flex flex-col justify-center px-8 py-12">
          <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-4 text-gray-600">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary-foreground flex items-center font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go back home
          </Link>
        </div>
      </div>
      {/* <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          color: "#2563eb",
          textDecoration: "underline",
          fontWeight: 500,
        }}
      >
        Go back home
      </Link> */}
    </div>
  );
}
