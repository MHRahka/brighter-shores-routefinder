import { markets } from "./nodes.js";

/**
 * Bounties that can be completed in the game
 * Data is referenced from: https://brightershoreswiki.org/w/Merchant
 *
 * Experience data is referenced from: https://brightershoreswiki.org/w/Merchant_Guild_Bounties_XP_%26_Values
 * Experience scales with level, and the formula is currently unknown.
 * So we are using the maximum values currently reported on the wiki (currently level 484)
 */
export const bounties = {
  CARROTS: {
    name: "Carrots",
    level: 0,
    exp: 191337,
    seller: markets.GREENGROCERS,
    buyer: markets.TOY_STALL,
  },
  SOAP: {
    name: "Soap",
    level: 0,
    exp: 186664,
    seller: markets.SOAP_SHOP,
    buyer: markets.BUTCHERS_STALL,
  },
  RIBS: {
    name: "Ribs",
    level: 2,
    exp: 137939,
    seller: markets.BUTCHERS_STALL,
    buyer: markets.SOUVENIR_STALL,
  },
  MEAT_WRAP: {
    name: "Meat Wrap",
    level: 4,
    exp: 138597,
    seller: markets.HALLIGS_STREET_FOOD,
    buyer: markets.CHEESE_SHOP,
  },
  BEEF_JOINT: {
    name: "Beef Joint",
    level: 6,
    exp: 116218,
    seller: markets.HENDERSONS_MEAT,
    buyer: markets.HALLIGS_STREET_FOOD,
  },
  CLOCKWORK_SHEEP: {
    name: "Clockwork Sheep",
    level: 8,
    exp: 134843,
    seller: markets.PENNYS_CLOCKWORK,
    buyer: markets.CLOCK_STALL,
  },
  PORCELAIN_DOLL: {
    name: "Porcelain Doll",
    level: 12,
    exp: 168444,
    seller: markets.TOY_STALL,
    buyer: markets.FORTUNEHOLD_FARM,
  },
  PLATES: {
    name: "Plates",
    level: 16,
    exp: 174865,
    seller: markets.HERMARS_HOMEWARE,
    buyer: markets.JENNALERS_WINES,
  },
  PIN_BADGE: {
    name: "Pin Badge",
    level: 21,
    exp: 134590,
    seller: markets.SOUVENIR_STALL,
    buyer: markets.VICTOR_T_CYCLOPS,
  },
  PUMPKIN: {
    name: "Pumpkin",
    level: 28,
    exp: 3574,
    seller: markets.FORTUNEHOLD_FARM,
    buyer: markets.VASE_STALL,
  },
  PIZZA: {
    name: "Pizza",
    level: 33,
    exp: 3804,
    seller: markets.CHEF,
    buyer: markets.FRANCESCAS_FRUIT_STALL,
  },
  BANANAS: {
    name: "Bananas",
    level: 40,
    exp: 3860,
    seller: markets.FRANCESCAS_FRUIT_STALL,
    buyer: markets.PENNYS_CLOCKWORK,
  },
  TIN_POCKET_WATCH: {
    name: "Tin Pocket Watch",
    level: 45,
    exp: 4220,
    seller: markets.SNILCHS_WATCHES,
    buyer: markets.BOGGS_ANTIQUES,
  },
  HOMESPUN_CLOTH: {
    name: "Homespun Cloth",
    level: 50,
    exp: 3030,
    seller: markets.TEXTILES_STALL,
    buyer: markets.CLOCK_STALL,
  },
  RAINBOW_CHEESE: {
    name: "Rainbow Cheese",
    level: 58,
    exp: 2852,
    seller: markets.CHEESE_SHOP,
    buyer: markets.HENDERSONS_MEAT,
  },
  ARGANIAN_WINE: {
    name: "Arganian Wine",
    level: 63,
    exp: 3796,
    seller: markets.JENNALERS_WINES,
    buyer: markets.VASE_STALL,
  },
  OAK_PATTERNED_VASE: {
    name: "Oak Patterned Vase",
    level: 68,
    exp: 2874,
    seller: markets.VASE_STALL,
    buyer: markets.HENDERSONS_MEAT,
  },
  SCENTED_CANDLE: {
    name: "Scented Candle",
    level: 76,
    exp: 3551,
    seller: markets.CANDICES_CANDLES,
    buyer: markets.SOAP_SHOP,
  },
  UNICORN_DUST: {
    exp: 3298,
    level: 81,
    name: "Unicorn Dust",
    seller: markets.VICTOR_T_CYCLOPS,
    buyer: markets.JANESSAS_DELICACIES,
  },
  LANDSCAPE_PAINTING: {
    exp: 3228,
    level: 88,
    name: "Landscape Painting",
    seller: markets.BERTS_GALLERY,
    buyer: markets.TOMMY_SHOES_WINES,
  },
  CARRIAGE_CLOCK: {
    level: 93,
    name: "Carriage Clock",
    seller: markets.CLOCK_STALL,
    buyer: markets.PENNYS_CLOCKWORK,
  },
  SPECTACLES: {
    level: 98,
    name: "Spectacles",
    seller: markets.MONOCLE_MARKET,
    buyer: markets.CANDICES_CANDLES,
  },
  SHARPSEED_WINE: {
    level: 106,
    name: "Sharpseed Wine",
    seller: markets.TOMMY_SHOES_WINES,
    buyer: markets.JANESSAS_DELICACIES,
  },
  RUG: {
    level: 111,
    name: "Rug",
    seller: markets.BOGGS_ANTIQUES,
    buyer: markets.HERMARS_HOMEWARE,
  },
  CAVIAR: {
    level: 116,
    name: "Caviar",
    seller: markets.JANESSAS_DELICACIES,
    buyer: markets.BOGGS_ANTIQUES,
  },
  RED_CABBAGE: {
    level: 124,
    name: "Red Cabbage",
    seller: markets.CABBAGE_STALL,
    buyer: markets.PEARL_STALL,
  },
  IVORY_SWIRL_PEARL: {
    level: 129,
    name: "Ivory Swirl Pearl",
    seller: markets.PEARL_STALL,
    buyer: markets.CABBAGE_STALL,
  },
  BATH_SALTS: {
    level: 136,
    name: "Bath Salts",
    seller: markets.SOAP_SHOP,
    buyer: markets.MONOCLE_MARKET,
  },
  TOMATOES: {
    level: 141,
    name: "Tomatoes",
    seller: markets.GREENGROCERS,
    buyer: markets.CHEF,
  },
  STEAK: {
    level: 146,
    name: "Steak",
    seller: markets.BUTCHERS_STALL,
    buyer: markets.HALLIGS_STREET_FOOD,
  },
  BURGER: {
    level: 154,
    name: "Burger",
    seller: markets.HALLIGS_STREET_FOOD,
    buyer: markets.JENNALERS_WINES,
  },
  HAM_LEG: {
    level: 159,
    name: "Ham Leg",
    seller: markets.HENDERSONS_MEAT,
    buyer: markets.TOY_STALL,
  },
  CLOCKWORK_DRAGON: {
    level: 164,
    name: "Clockwork Dragon",
    seller: markets.PENNYS_CLOCKWORK,
    buyer: markets.CHEESE_SHOP,
  },
  SNOW_GLOBE: {
    level: 170,
    name: "Snow Globe",
    seller: markets.TOY_STALL,
    buyer: markets.TOMMY_SHOES_WINES,
  },
  CUPS: {
    level: 175,
    name: "Cups",
    seller: markets.HERMARS_HOMEWARE,
    buyer: markets.SOUVENIR_STALL,
  },
  POSTCARDS: {
    level: 183,
    name: "Postcards",
    seller: markets.SOUVENIR_STALL,
    buyer: markets.TEXTILES_STALL,
  },
  RHUBARB: {
    level: 188,
    name: "Rhubarb",
    seller: markets.FORTUNEHOLD_FARM,
    buyer: markets.SOAP_SHOP,
  },
  CURRY: {
    level: 193,
    name: "Curry",
    seller: markets.CHEF,
    buyer: markets.SNILCHS_WATCHES,
  },
  ORANGES: {
    level: 205,
    name: "Oranges",
    seller: markets.FRANCESCAS_FRUIT_STALL,
    buyer: markets.TEXTILES_STALL,
  },
  PRECISE_POCKET_WATCH: {
    level: 221,
    name: "Precise Pocket Watch",
    seller: markets.SNILCHS_WATCHES,
    buyer: markets.GREENGROCERS,
  },
  SILK: {
    level: 236,
    name: "Silk",
    seller: markets.TEXTILES_STALL,
    buyer: markets.HERMARS_HOMEWARE,
  },
  OLD_RARG: {
    level: 257,
    name: "Old Rarg",
    seller: markets.CHEESE_SHOP,
    buyer: markets.CHEF,
  },
  FARGUST_WINE: {
    level: 273,
    name: "Fargust Wine",
    seller: markets.JENNALERS_WINES,
    buyer: markets.BERTS_GALLERY,
  },
  STRIPED_VASE: {
    level: 300,
    name: "Striped Vase",
    seller: markets.VASE_STALL,
    buyer: markets.BERTS_GALLERY,
  },
  TEA_LIGHTS: {
    level: 316,
    name: "Tea Lights",
    seller: markets.CANDICES_CANDLES,
    buyer: markets.FORTUNEHOLD_FARM,
  },
  UNICORN_HAIR: {
    level: 331,
    name: "Unicorn Hair",
    seller: markets.VICTOR_T_CYCLOPS,
    buyer: markets.SNILCHS_WATCHES,
  },
  PORTRAIT_PAINTING: {
    level: 352,
    name: "Portrait Painting",
    seller: markets.BERTS_GALLERY,
    buyer: markets.CANDICES_CANDLES,
  },
  PENDULUM_CLOCK: {
    level: 368,
    name: "Pendulum Clock",
    seller: markets.CLOCK_STALL,
    buyer: markets.FRANCESCAS_FRUIT_STALL,
  },
  MONOCLE: {
    level: 389,
    name: "Monocle",
    seller: markets.MONOCLE_MARKET,
    buyer: markets.VICTOR_T_CYCLOPS,
  },
  TOPHILL_WINE: {
    level: 410,
    name: "Tophill Wine",
    seller: markets.TOMMY_SHOES_WINES,
    buyer: markets.GREENGROCERS,
  },
  ANTIQUE_BOOK: {
    level: 426,
    name: "Antique Book",
    seller: markets.BOGGS_ANTIQUES,
    buyer: markets.BUTCHERS_STALL,
  },
  TRUFFLES: {
    level: 453,
    name: "Truffles",
    seller: markets.JANESSAS_DELICACIES,
    buyer: markets.MONOCLE_MARKET,
  },
  NAPA_CABBAGE: {
    level: 468,
    name: "Napa Cabbage",
    seller: markets.CABBAGE_STALL,
    buyer: markets.PEARL_STALL,
  },
  BLUE_DAZZLING_PEARL: {
    level: 484,
    name: "Blue Dazzling Pearl",
    seller: markets.PEARL_STALL,
    buyer: markets.CABBAGE_STALL,
  },
};

/**
 * The status of a bounty
 *
 * NOT_STARTED: The item still needs to be purchased
 * IN_PROGRESS: The item has been purchased but not yet sold
 * COMPLETED: The item has been purchased
 */
export const BountyStatus = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
};
