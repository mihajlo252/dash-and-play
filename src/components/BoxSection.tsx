export const BoxSection = ({width, children}: {width: string, children: React.ReactNode}) => {
  return (
    <div className={`${width} flex h-full rounded-lg border-2 border-slate-900 bg-base-300 p-5 text-neutral`}>
      {children}
    </div>
  )
}
