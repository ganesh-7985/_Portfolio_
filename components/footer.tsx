export function Footer() {
  return (
    <footer className="bg-secondary py-2 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-muted-foreground mt-6">Designed & Built by Shankar Ganesh</p>
        <p className="text-muted-foreground/70 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}
