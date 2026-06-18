const PALETTES = [
  ['#52B4DA', '#1E3E85'],
  ['#FFED43', '#F29939'],
  ['#19CDB8', '#1E3E85'],
]

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Avatar({ name, size = 44, ring = false, paletteIndex = 0 }) {
  const [from, to] = PALETTES[paletteIndex % PALETTES.length]
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold shrink-0 ${
        ring ? 'ring-2 ring-[#F29939]' : ''
      }`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(132.56deg, ${from} 5.63%, ${to} 106.18%)`,
      }}
      role="img"
      aria-label={name}
    >
      {initialsOf(name)}
    </div>
  )
}
