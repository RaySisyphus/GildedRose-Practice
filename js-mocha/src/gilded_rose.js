class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case ('Sulfuras, Hand of Ragnaros'):
          break;
        case ('Aged Brie'):
          item.sellIn--;
          item.quality = Math.min(item.quality + (item.sellIn > 0 ? 1 : 2), 50);
          break;
        case ('Backstage passes to a TAFKAL80ETC concert'):
          item.sellIn--;
          if (item.sellIn < 0) {
            item.quality = 0;
          }
          else {
            if (item.sellIn < 5) {
              item.quality = Math.min(item.quality + 3, 50);
            }
            else if (item.sellIn < 10) {
              item.quality = Math.min(item.quality + 2, 50);
            }
            else {
              item.quality = Math.min(item.quality + 1, 50);
            }
          }
          break;
        default:
          item.sellIn--;
          if (item.name.substring(0, 11) == "Conjured - ") {
            item.quality = Math.max(item.quality - (item.sellIn > 0 ? 2 : 4), 0)
          }
          else {
            item.quality = Math.max(item.quality - (item.sellIn > 0 ? 1 : 2), 0);
          }
          break;
      }
    })
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
