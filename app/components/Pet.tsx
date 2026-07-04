/* Chibi anime pet mascots, drawn as inline SVG so they stay crisp,
   theme-tinted (via CSS accent vars), and need zero external assets.
   Each calculator gets its own little friend ♡ */

export type PetType =
  | "cat"
  | "puppy"
  | "bunny"
  | "fox"
  | "bear"
  | "panda"
  | "penguin"
  | "unicorn";

const EYE = "#4a3f57";
const DARK = "#4a4458";

/* shared big sparkly eyes + blushy cheeks */
function Face({
  eyeY = 52,
  gap = 13,
  cx = 50,
}: {
  eyeY?: number;
  gap?: number;
  cx?: number;
}) {
  const lx = cx - gap;
  const rx = cx + gap;
  return (
    <>
      {/* blush */}
      <ellipse cx={lx - 6} cy={eyeY + 9} rx="5.5" ry="3.6" fill="var(--blush)" opacity="0.75" />
      <ellipse cx={rx + 6} cy={eyeY + 9} rx="5.5" ry="3.6" fill="var(--blush)" opacity="0.75" />
      {/* eyes */}
      <ellipse cx={lx} cy={eyeY} rx="6.4" ry="7.6" fill={EYE} />
      <ellipse cx={rx} cy={eyeY} rx="6.4" ry="7.6" fill={EYE} />
      {/* sparkle highlights */}
      <circle cx={lx + 2.2} cy={eyeY - 2.6} r="2.5" fill="#fff" />
      <circle cx={rx + 2.2} cy={eyeY - 2.6} r="2.5" fill="#fff" />
      <circle cx={lx - 2} cy={eyeY + 2.5} r="1.2" fill="#fff" opacity="0.85" />
      <circle cx={rx - 2} cy={eyeY + 2.5} r="1.2" fill="#fff" opacity="0.85" />
      {/* smile */}
      <path
        d={`M${cx - 4} ${eyeY + 10} q4 4 8 0`}
        fill="none"
        stroke={EYE}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  );
}

function Cat() {
  return (
    <>
      {/* ears */}
      <path d="M26 42 L34 18 L50 40 Z" fill="var(--accent)" />
      <path d="M74 42 L66 18 L50 40 Z" fill="var(--accent)" />
      <path d="M31 40 L35 25 L44 39 Z" fill="var(--blush)" />
      <path d="M69 40 L65 25 L56 39 Z" fill="var(--blush)" />
      {/* head */}
      <circle cx="50" cy="56" r="30" fill="var(--accent-2)" />
      {/* whiskers */}
      <g stroke={EYE} strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
        <line x1="18" y1="56" x2="30" y2="58" />
        <line x1="18" y1="62" x2="30" y2="62" />
        <line x1="82" y1="56" x2="70" y2="58" />
        <line x1="82" y1="62" x2="70" y2="62" />
      </g>
      {/* nose */}
      <path d="M47 58 L53 58 L50 62 Z" fill="var(--accent-deep)" />
      <Face eyeY={54} />
    </>
  );
}

function Bunny() {
  return (
    <>
      {/* ears */}
      <g transform="rotate(-10 42 30)">
        <ellipse cx="42" cy="26" rx="7" ry="20" fill="var(--accent-2)" />
        <ellipse cx="42" cy="26" rx="3" ry="13" fill="var(--blush)" />
      </g>
      <g transform="rotate(10 58 30)">
        <ellipse cx="58" cy="26" rx="7" ry="20" fill="var(--accent-2)" />
        <ellipse cx="58" cy="26" rx="3" ry="13" fill="var(--blush)" />
      </g>
      {/* head */}
      <circle cx="50" cy="58" r="27" fill="var(--accent-2)" />
      {/* nose */}
      <path d="M47.5 60 L52.5 60 L50 63.5 Z" fill="var(--accent-deep)" />
      <Face eyeY={55} gap={12} />
    </>
  );
}

function Bear() {
  return (
    <>
      {/* ears */}
      <circle cx="30" cy="34" r="11" fill="var(--accent)" />
      <circle cx="70" cy="34" r="11" fill="var(--accent)" />
      <circle cx="30" cy="34" r="6" fill="var(--blush)" />
      <circle cx="70" cy="34" r="6" fill="var(--blush)" />
      {/* head */}
      <circle cx="50" cy="56" r="30" fill="var(--accent-2)" />
      {/* muzzle */}
      <ellipse cx="50" cy="66" rx="14" ry="10.5" fill="#fff" />
      <ellipse cx="50" cy="60" rx="4.2" ry="3.2" fill="var(--accent-deep)" />
      <Face eyeY={52} gap={12} />
    </>
  );
}

function Puppy() {
  return (
    <>
      {/* floppy ears (behind head) */}
      <ellipse cx="24" cy="54" rx="11" ry="22" fill="var(--accent-deep)" opacity="0.85" />
      <ellipse cx="76" cy="54" rx="11" ry="22" fill="var(--accent-deep)" opacity="0.85" />
      {/* head */}
      <circle cx="50" cy="54" r="27" fill="var(--accent-2)" />
      {/* muzzle */}
      <ellipse cx="50" cy="64" rx="13" ry="10" fill="#fff" />
      <ellipse cx="50" cy="59" rx="4.4" ry="3.4" fill={DARK} />
      {/* tongue */}
      <path d="M46 66 h8 v5 a4 4 0 0 1 -8 0 Z" fill="#ff9db0" />
      <Face eyeY={50} gap={12} />
    </>
  );
}

function Fox() {
  return (
    <>
      {/* ears */}
      <path d="M22 44 L32 12 L48 40 Z" fill="var(--accent-2)" />
      <path d="M78 44 L68 12 L52 40 Z" fill="var(--accent-2)" />
      <path d="M28 30 L32 12 L40 30 Z" fill="var(--accent-deep)" />
      <path d="M72 30 L68 12 L60 30 Z" fill="var(--accent-deep)" />
      {/* head */}
      <path d="M50 30 C74 30 78 52 66 66 C60 74 40 74 34 66 C22 52 26 30 50 30 Z" fill="var(--accent-2)" />
      {/* white cheeks / muzzle */}
      <path d="M50 52 C60 52 64 62 58 70 C54 75 46 75 42 70 C36 62 40 52 50 52 Z" fill="#fff" />
      <path d="M47 56 L53 56 L50 60 Z" fill={DARK} />
      <Face eyeY={50} gap={13} />
    </>
  );
}

function Panda() {
  return (
    <>
      {/* ears */}
      <circle cx="28" cy="32" r="11" fill={DARK} />
      <circle cx="72" cy="32" r="11" fill={DARK} />
      {/* head */}
      <circle cx="50" cy="56" r="30" fill="#fff" stroke="var(--line)" strokeWidth="1.5" />
      {/* eye patches */}
      <ellipse cx="37" cy="55" rx="8.5" ry="11" fill={DARK} transform="rotate(18 37 55)" />
      <ellipse cx="63" cy="55" rx="8.5" ry="11" fill={DARK} transform="rotate(-18 63 55)" />
      {/* eyes on top of patches */}
      <circle cx="38" cy="54" r="4.6" fill="#fff" />
      <circle cx="62" cy="54" r="4.6" fill="#fff" />
      <circle cx="38.5" cy="54.5" r="2.6" fill={EYE} />
      <circle cx="61.5" cy="54.5" r="2.6" fill={EYE} />
      <circle cx="39.5" cy="53.5" r="1" fill="#fff" />
      <circle cx="62.5" cy="53.5" r="1" fill="#fff" />
      {/* blush + nose + smile */}
      <ellipse cx="28" cy="64" rx="5" ry="3.2" fill="var(--blush)" opacity="0.8" />
      <ellipse cx="72" cy="64" rx="5" ry="3.2" fill="var(--blush)" opacity="0.8" />
      <path d="M47 63 L53 63 L50 66 Z" fill={DARK} />
      <path d="M46 68 q4 4 8 0" fill="none" stroke={EYE} strokeWidth="1.8" strokeLinecap="round" />
    </>
  );
}

function Penguin() {
  return (
    <>
      {/* body */}
      <ellipse cx="50" cy="56" rx="29" ry="32" fill="var(--accent-deep)" />
      {/* belly */}
      <ellipse cx="50" cy="60" rx="18" ry="24" fill="#fff" />
      {/* flippers */}
      <ellipse cx="21" cy="58" rx="6" ry="16" fill="var(--accent-deep)" transform="rotate(16 21 58)" />
      <ellipse cx="79" cy="58" rx="6" ry="16" fill="var(--accent-deep)" transform="rotate(-16 79 58)" />
      {/* beak */}
      <path d="M44 58 L56 58 L50 66 Z" fill="#ffb347" />
      {/* feet */}
      <ellipse cx="42" cy="86" rx="6" ry="3.4" fill="#ffb347" />
      <ellipse cx="58" cy="86" rx="6" ry="3.4" fill="#ffb347" />
      {/* eyes */}
      <ellipse cx="42" cy="48" rx="5" ry="6.2" fill={EYE} />
      <ellipse cx="58" cy="48" rx="5" ry="6.2" fill={EYE} />
      <circle cx="43.6" cy="45.8" r="2" fill="#fff" />
      <circle cx="59.6" cy="45.8" r="2" fill="#fff" />
      <ellipse cx="34" cy="58" rx="4.5" ry="3" fill="var(--blush)" opacity="0.8" />
      <ellipse cx="66" cy="58" rx="4.5" ry="3" fill="var(--blush)" opacity="0.8" />
    </>
  );
}

function Unicorn() {
  return (
    <>
      <defs>
        <linearGradient id="uni-horn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      {/* horn */}
      <path d="M50 6 L45 30 L55 30 Z" fill="url(#uni-horn)" />
      <line x1="47" y1="16" x2="53" y2="14" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="46.5" y1="23" x2="53.5" y2="21" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      {/* ears */}
      <path d="M32 40 L34 22 L46 36 Z" fill="var(--accent-2)" />
      <path d="M68 40 L66 22 L54 36 Z" fill="var(--accent-2)" />
      {/* mane */}
      <circle cx="26" cy="42" r="8" fill="#ffd6e8" />
      <circle cx="24" cy="56" r="8" fill="#d6c4fb" />
      <circle cx="27" cy="69" r="7" fill="#bfe3ff" />
      {/* head */}
      <circle cx="52" cy="56" r="28" fill="var(--accent-2)" />
      {/* star sparkle */}
      <path d="M74 30 l1.6 3.4 3.6 .4 -2.7 2.5 .7 3.6 -3.2 -1.8 -3.2 1.8 .7 -3.6 -2.7 -2.5 3.6 -.4 Z" fill="#ffe08a" />
      {/* eyes with lashes */}
      <ellipse cx="45" cy="55" rx="5.6" ry="7" fill={EYE} />
      <ellipse cx="61" cy="55" rx="5.6" ry="7" fill={EYE} />
      <circle cx="46.8" cy="52.6" r="2.2" fill="#fff" />
      <circle cx="62.8" cy="52.6" r="2.2" fill="#fff" />
      <line x1="39" y1="49" x2="41.5" y2="51" stroke={EYE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="67" y1="49" x2="64.5" y2="51" stroke={EYE} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="36" cy="63" rx="5" ry="3.2" fill="var(--blush)" opacity="0.8" />
      <ellipse cx="68" cy="63" rx="5" ry="3.2" fill="var(--blush)" opacity="0.8" />
      <path d="M49 65 q3 3 6 0" fill="none" stroke={EYE} strokeWidth="1.7" strokeLinecap="round" />
    </>
  );
}

const PETS: Record<PetType, () => React.JSX.Element> = {
  cat: Cat,
  bunny: Bunny,
  bear: Bear,
  puppy: Puppy,
  fox: Fox,
  panda: Panda,
  penguin: Penguin,
  unicorn: Unicorn,
};

export default function Pet({ type, size = 88 }: { type: PetType; size?: number }) {
  const Body = PETS[type];
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={`${type} chibi mascot`}
      style={{ display: "block", overflow: "visible" }}
    >
      <Body />
    </svg>
  );
}
