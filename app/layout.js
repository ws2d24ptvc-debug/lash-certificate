export const metadata = {
  title: "Lash Course Proxy",
  description: "Backend proxy for Lash Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
