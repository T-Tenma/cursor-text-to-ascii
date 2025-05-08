'use client';

import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';

interface ControlPanelProps {
  text: string;
  setText: (text: string) => void;
  font: string;
  setFont: (font: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  spacing: string;
  setSpacing: (spacing: string) => void;
}

const fonts = [
  'Standard',
  '3D',
  '3D-ASCII',
  '3x5',
  '4Max',
  '5lineoblique',
  'Acrobatic',
  'Alligator',
  'Alligator2',
  'Alpha',
  'Alphabet',
  'Arrows',
  'Avatar',
  'Banner',
  'Banner3-D',
  'Banner3',
  'Banner4',
  'Barbwire',
  'Basic',
  'Bear',
  'Bell',
  'Big',
  'BigChief',
  'Binary',
  'Block',
  'Blocks',
  'Bloody',
  'Bolger',
  'Braced',
  'Bright',
  'Broadway',
  'Broadway_KB',
  'Bulbhead',
  'Caligraphy',
  'Caligraphy2',
  'Calvin_S',
  'Cards',
  'Catwalk',
  'Chiseled',
  'Chunky',
  'Coinstak',
  'Cola',
  'Colossal',
  'Computer',
  'Contessa',
  'Contrast',
  'Cosmic',
  'Cosmike',
  'Crawford',
  'Crawford2',
  'Crazy',
  'Cricket',
  'Cursive',
  'Cyberlarge',
  'Cybermedium',
  'Cybersmall',
  'Cygnet',
  'DANC4',
  'DOS_Rebel',
  'DWhistled',
  'Dancing_Font',
  'Decimal',
  'Def_Leppard',
  'Delta_Corps_Priest_1',
  'Diamond',
  'Diet_Cola',
  'Digital',
  'Doh',
  'Doom',
  'Dot_Matrix',
  'Double_Shorts',
  'Double',
  'Dr_Pepper',
  'Efti_Chess',
  'Efti_Font',
  'Efti_Piti',
  'Efti_Poster',
  'Efti_Robot',
  'Efti_Stuc',
  'Efti_Wall',
  'Efti_Water',
  'Electronic',
  'Elite',
  'Epic',
  'Fender',
  'Filter',
  'Fire_Font-s',
  'Fire_Font_S',
  'Flipped',
  'Flower_Power',
  'Four_Tops',
  'Fraktur',
  'Fun_Face',
  'Fun_Faces',
  'Fuzzy',
  'Georgi16',
  'Georgia11',
  'Ghost',
  'Ghoulish',
  'Glenyn',
  'Goofy',
  'Gothic',
  'Graceful',
  'Gradient',
  'Graffiti',
  'Greek',
  'Heart_Left',
  'Heart_Right',
  'Henry_3D',
  'Hex',
  'Hieroglyphs',
  'Hollywood',
  'Horizontal_Left',
  'Horizontal_Right',
  'ICL-1900',
  'Impossible',
  'Invita',
  'Isometric1',
  'Isometric2',
  'Isometric3',
  'Isometric4',
  'Italic',
  'Ivrit',
  'JS_Block_Letters',
  'JS_Bracket_Letters',
  'JS_Capital_Curves',
  'JS_Cursive',
  'JS_Stick_Letters',
  'Jacky',
  'Jazmine',
  'Jerusalem',
  'Katakana',
  'Kban',
  'Keyboard',
  'Knob',
  'Konto',
  'Konto_Slant',
  'LCD',
  'Larry_3D',
  'Larry_3D_2',
  'Lean',
  'Letters',
  'Lil_Devil',
  'Line_Blocks',
  'Linux',
  'Lockergnome',
  'Madrid',
  'Marquee',
  'Maxfour',
  'Merlin1',
  'Merlin2',
  'Mike',
  'Mini',
  'Mirror',
  'Mnemonic',
  'Modular',
  'Morse',
  'Morse2',
  'Moscow',
  'Mshebrew210',
  'Muzzle',
  'NScript',
  'NT_Greek',
  'NV_Script',
  'Nancyj-Fancy',
  'Nancyj-Improved',
  'Nancyj-Underlined',
  'Nancyj',
  'Nipples',
  'O8',
  'OS2',
  'Octal',
  'Ogre',
  'Old_Banner',
  'Patorjk-Cheese',
  'Patorjk-HeX',
  'Pawp',
  'Peaks',
  'Peaks_Slant',
  'Pebbles',
  'Pepper',
  'Poison',
  'Puffy',
  'Puzzle',
  'Pyramid',
  'Rammstein',
  'Rectangles',
  'Red_Phoenix',
  'Relief',
  'Relief2',
  'Reverse',
  'Roman',
  'Rot13',
  'Rotated',
  'Rounded',
  'Rowan_Cap',
  'Rozzo',
  'Runic',
  'Runyc',
  'S_Blood',
  'SL_Script',
  'Santa_Clara',
  'Script',
  'Serifcap',
  'Shadow',
  'Shimrod',
  'Short',
  'Slant',
  'Slant_Relief',
  'Slide',
  'Small',
  'Small_Caps',
  'Small_Isometric1',
  'Small_Keyboard',
  'Small_Poison',
  'Small_Script',
  'Small_Shadow',
  'Small_Slant',
  'Small_Tengwar',
  'Soft',
  'Speed',
  'Spliff',
  'Stacey',
  'Stampate',
  'Stampatello',
  'Standard',
  'Star_Strips',
  'Star_Wars',
  'Stellar',
  'Stforek',
  'Stick_Letters',
  'Stop',
  'Straight',
  'Stronger_Than_All',
  'Sub-Zero',
  'Swamp_Land',
  'Swan',
  'Sweet',
  'THIS',
  'Tanja',
  'Tengwar',
  'Term',
  'Test1',
  'The_Edge',
  'Thick',
  'Thin',
  'Thorned',
  'Three_Point',
  'Ticks',
  'Ticks_Slant',
  'Tiles',
  'Tinker-Toy',
  'Tombstone',
  'Train',
  'Trek',
  'Tsalagi',
  'Tubular',
  'Twisted',
  'Two_Point',
  'USA_Flag',
  'Univers',
  'Varsity',
  'Wavy',
  'Weird',
  'Wet_Letter',
  'Whimsy',
  'Wow',
];

const fontSizes = [
  { id: 'small', name: 'Small' },
  { id: 'medium', name: 'Medium' },
  { id: 'large', name: 'Large' },
];

const spacingOptions = [
  { id: 'compact', name: 'Compact' },
  { id: 'normal', name: 'Normal' },
  { id: 'wide', name: 'Wide' },
];

export function ControlPanel({
  text,
  setText,
  font,
  setFont,
  fontSize,
  setFontSize,
  spacing,
  setSpacing,
}: ControlPanelProps) {
  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Text Input
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          rows={4}
          placeholder="Enter your text here..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Font Style
        </label>
        <Listbox value={font} onChange={setFont}>
          <div className="relative">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
              <span className="block truncate text-gray-900 dark:text-white">{font}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
              {fonts.map((fontOption) => (
                <Listbox.Option
                  key={fontOption}
                  value={fontOption}
                  className={({ active }) =>
                    `${active ? 'text-white bg-indigo-600' : 'text-gray-900 dark:text-white'}
                    cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                >
                  {fontOption}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Font Size
        </label>
        <div className="grid grid-cols-3 gap-2">
          {fontSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setFontSize(size.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                fontSize === size.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Spacing
        </label>
        <div className="grid grid-cols-3 gap-2">
          {spacingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSpacing(option.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                spacing === option.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 