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
    this.items.forEach((item)=>{
      switch (item.name) {
        case ('Aged Brie'):
          item.sellIn--;
          if (item.sellIn < 0 && item.quality < 49) {
            item.quality += 2;
          }
          else {
            if (item.quality < 50) {
              item.quality += 1;
            }
          }
          break;
        case ('Backstage passes to a TAFKAL80ETC concert'):
          item.sellIn--;
          if (item.quality < 50) {
            if (item.sellIn < 5
            ) {
              item.quality += 3;
            }
            else if (item.sellIn < 10
            ) {
              item.quality += 2;
            }
            else {
              item.quality++;
            }
          }
          if (item.sellIn < 0) {
            item.quality = 0;
          }
          break;
        case ('Sulfuras, Hand of Ragnaros'):
          break;
        default:
          item.sellIn--;
          if (item.sellIn < 0 && item.quality > 1) {
            item.quality -= 2;
          }
          else{
            if(item.quality > 0){
              item.quality -= 1;
            }
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
