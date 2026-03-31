export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        <div className="flex flex-col md:flex-row md:w-full md:justify-between">
                        {children}
                    </div>
        </>
    )
}