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
        case ('Aged Brie'):
          item.sellIn--;
          if (item.sellIn > 0) {
            item.quality = Math.min(item.quality + 1, 50);
          }
          else {
              item.quality = Math.min(item.quality + 2, 50);
          }
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
        case ('Sulfuras, Hand of Ragnaros'):
          break;
        default:
          item.sellIn--;
          if (item.sellIn > 0) {
            item.quality = Math.max(item.quality - 1, 0);
          }
          else {
            item.quality = Math.max(item.quality - 2, 0);
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
