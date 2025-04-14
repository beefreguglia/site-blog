type PostGridCardProps = {
  children: React.ReactNode;
}

export function PostGridCard({ children}: PostGridCardProps) {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-4">{children}</div>
  )
}