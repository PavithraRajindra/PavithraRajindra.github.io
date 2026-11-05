import { useEffect, useRef, useState } from 'react';

// Palette keys used in pixel maps. '.' = transparent.
const PAL = {
  X: 'var(--ink)',
  W: '#ffffff',
  Y: '#FFE27A',
  B: '#3E7BFA',
  b: '#BFD9FF',
  K: '#0B1026',
  G: '#5BE38B',
  P: '#FFB8C6',
  S: '#C9D6E8',
};

export function PixelArt({ map, size = 4, className = '', title }) {
  const h = map.length;
  const w = map[0].length;
  const rects = [];
  map.forEach((row, y) =>
    [...row].forEach((c, x) => {
      if (c !== '.') rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PAL[c]} />);
    })
  );
  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      width={w * size}
      height={h * size}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {rects}
    </svg>
  );
}

export const ICONS = {
  home: [
    '.....XX.....',
    '....XYYX....',
    '...XYYYYX...',
    '..XYYYYYYX..',
    '.XYYYYYYYYX.',
    'XXYYYYYYYYXX',
    '.XYYYYYYYYX.',
    '.XYYXXXXYYX.',
    '.XYYXWWXYYX.',
    '.XYYXWWXYYX.',
    '.XYYXWWXYYX.',
    '.XXXXXXXXXX.',
  ],
  folder: [
    '............',
    'XXXXX.......',
    'XYYYYX......',
    'XYYYYXXXXXXX',
    'XYYYYYYYYYYX',
    'XXXXXXXXXXXX',
    'XYYYYYYYYYYX',
    'XYYYYYYYYYYX',
    'XYYYYYYYYYYX',
    'XYYYYYYYYYYX',
    'XXXXXXXXXXXX',
    '............',
  ],
  case: [
    '............',
    '....XXXX....',
    '....X..X....',
    'XXXXXXXXXXXX',
    'XYYYYYYYYYYX',
    'XYYYYYYYYYYX',
    'XXXXXXXXXXXX',
    'XYYYYXXYYYYX',
    'XYYYYYYYYYYX',
    'XYYYYYYYYYYX',
    'XXXXXXXXXXXX',
    '............',
  ],
  person: [
    '....XXXX....',
    '...XYYYYX...',
    '...XYXYXX...',
    '...XYYYYX...',
    '....XXXX....',
    '............',
    '..XXXXXXXX..',
    '.XYYYYYYYYX.',
    '.XYYYYYYYYX.',
    '.XYYYYYYYYX.',
    '.XXXXXXXXXX.',
    '............',
  ],
  mail: [
    'XXXXXXXXXXXX',
    'XXWWWWWWWWXX',
    'XWXWWWWWWXWX',
    'XWWXWWWWXWWX',
    'XWWWXWWXWWWX',
    'XWWWWXXWWWWX',
    'XWWWWWWWWWWX',
    'XWWWWWWWWWWX',
    'XXXXXXXXXXXX',
  ],
  terminal: [
    'XXXXXXXXXXXX',
    'XBBBBBBBBWWX',
    'XXXXXXXXXXXX',
    'XKKKKKKKKKKX',
    'XKGKKKKKKKKX',
    'XKKGKKKKKKKX',
    'XKGKKGGGKKKX',
    'XKKKKKKKKKKX',
    'XXXXXXXXXXXX',
  ],
  trophy: [
    'XXXXXXXXXXXX',
    'XYXYYYYYYXYX',
    'XYXYYWYYYXYX',
    '.XXYYWYYYXX.',
    '...XYYYYX...',
    '....XYYX....',
    '.....XX.....',
    '.....XX.....',
    '....XXXX....',
    '...XYYYYX...',
    '...XXXXXX...',
  ],
  flask: [
    '...XXXXXX...',
    '....XWWX....',
    '....XWWX....',
    '....XWWX....',
    '...XWWWWX...',
    '..XWWWWWWX..',
    '.XGGGGGGGGX.',
    '.XGGWGGGGGX.',
    'XGGGGGGWGGGX',
    'XXXXXXXXXXXX',
  ],
  code: [
    'XXXXXXXXXXXX',
    'XWWWWWWWWWWX',
    'XWWXWWWWXWWX',
    'XWXWWWXWWXWX',
    'XXWWWWXWWWXX',
    'XWXWWXWWWXWX',
    'XWWXWXWWXWWX',
    'XWWWWWWWWWWX',
    'XXXXXXXXXXXX',
  ],
  link: [
    '.XXXX.......',
    'XWWWWX......',
    'XWXXWX......',
    'XWX.XWXX....',
    '.XX.XWWWX...',
    '....XWWWX.XX',
    '...XWWWX.XWX',
    '......XWXXWX',
    '......XWWWWX',
    '.......XXXX.',
  ],
};

// Original mascot — "Bit", a tiny robot.
export const BIT_FRAMES = [
  [
    '.....XX.....',
    '.....XY.....',
    '....XXXX....',
    '.XXXXXXXXXX.',
    'XSSSSSSSSSSX',
    'XSKKKKKKKKSX',
    'XSKBBKKBBKSX',
    'XSKBBKKBBKSX',
    'XSKKKPPKKKSX',
    'XSSSSSSSSSSX',
    '.XXXXXXXXXX.',
    '..XSSSSSSX..',
    '.XSXSSSSXSX.',
    '.XX.XXXX.XX.',
  ],
  [
    '.....XX.....',
    '.....XY.....',
    '....XXXX....',
    '.XXXXXXXXXX.',
    'XSSSSSSSSSSX',
    'XSKKKKKKKKSX',
    'XSKKKKKKKKSX',
    'XSKBBKKBBKSX',
    'XSKKKPPKKKSX',
    'XSSSSSSSSSSX',
    '.XXXXXXXXXX.',
    '..XSSSSSSX..',
    '.XSXSSSSXSX.',
    '.XX.XXXX.XX.',
  ],
];

export function Bit({ size = 7 }) {
  const [blink, setBlink] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setBlink(1);
      setTimeout(() => setBlink(0), 160);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  return <PixelArt map={BIT_FRAMES[blink]} size={size} className="bit" title="Bit the robot" />;
}

// Pixel dissolve band between hero and dark sections.
function rng(seed) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

export function PixelBand({ flip = false, cell = 22, rows = 6 }) {
  const ref = useRef(null);
  const [cols, setCols] = useState(60);
  useEffect(() => {
    const update = () => ref.current && setCols(Math.ceil(ref.current.offsetWidth / cell) + 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [cell]);
  const r = rng(flip ? 97 : 42);
  const rects = [];
  for (let y = 0; y < rows; y++) {
    const p = (y + 1) / (rows + 1); // probability of dark
    for (let x = 0; x < cols; x++) {
      if (r() < p) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" />);
    }
  }
  return (
    <div ref={ref} className={`pixel-band ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox={`0 0 ${cols} ${rows}`} width={cols * cell} height={rows * cell} shapeRendering="crispEdges">
        {rects}
      </svg>
    </div>
  );
}
