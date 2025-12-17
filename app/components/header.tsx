export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        <div className="flex flex-row w-full justify-between">
                        {children}
                    </div>
        </>
    )
}