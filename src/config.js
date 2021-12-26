const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      // { name: "Background" },
      { name: "Skin" },
      { name: "Nose" },
      { name: "Eyes" },
      { name: "Suit" },
      { name: "Glasses" },
      { name: "Head" },
      { name: "Mouth" },
    ],
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      // { name: "Background rare" },
      { name: "Skin" },
      { name: "Nose" },
      { name: "Eyes rare" },
      { name: "Suit rare" },
      { name: "Glasses rare" },
      { name: "Head rare" },
      { name: "Mouth rare" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const deterministicallyRandom = true;
const seed = "005";

const debugLogs = false;

const format = {
  width: 1200,
  height: 1200,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "50%",
  static: false,
  default: "#000000",
};

const backgroundColorList = [
  '#DB9DBC',
  '#FA4339',
  '#1C2F56',
  '#16544E',
  '#E02F55',
  '#DC781B',
  '#0176CB',
  '#E56674',
  '#70459B',
  '#94D69D',
]

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 500,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  backgroundColorList,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  deterministicallyRandom,
  seed,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
