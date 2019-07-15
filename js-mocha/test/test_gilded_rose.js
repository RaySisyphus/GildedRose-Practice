var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("Sulfuras does not degrade in quality", function(){
    const gildedRose = new Shop([ 
      new Item('Sulfuras, Hand of Ragnaros',0,50),
      new Item('Sulfuras, Hand of Ragnaros',3,50)
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
    expect(items[1].quality).to.equal(50);
  })

  it("Aged Brie Increases in quality over time", function(){
    const gildedRose = new Shop([ new Item('Aged Brie',3,10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11)
  })

  it("Aged Brie increases in quality at twice the rate after sell by", function(){
    const gildedRose = new Shop([ new Item('Aged Brie',0,10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12)
  })

  it("Items do not exceed 50 in quality", function(){
    const gildedRose = new Shop(
      [ 
        new Item('Aged Brie',1,50),
        new Item('Aged Brie',0,50),
        new Item('Aged Brie',0,49),
        new Item('Backstage passes to a TAFKAL80ETC concert',1,50),
        new Item('Backstage passes to a TAFKAL80ETC concert',6,50),
        new Item('Backstage passes to a TAFKAL80ETC concert',15,50),
        new Item('Backstage passes to a TAFKAL80ETC concert',1,49),
        new Item('Backstage passes to a TAFKAL80ETC concert',6,48),
      ]);
    const items = gildedRose.updateQuality();
    items.forEach((item)=>{
      expect(item.quality).to.equal(50);
    })
  })

  it("BackStage pass incrases in quality by 2 within ten days of sell by date", function(){
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert',10,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12)
  })

  it("BackStage pass incrases in quality by 3 within five days of sell by date", function(){
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert',5,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(13)
  })

  it("BackStage pass quality is zero after sell by date", function(){
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert',0,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0)
  })

  it("Items degrade by 1 in quality everday before sellBy date", function(){
    const gildedRose = new Shop([ new Item('foo',10,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9)
  })

  it("Items degrade by 2 in quality everday after sellBy date", function(){
    const gildedRose = new Shop([ new Item('foo',0,10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8)
  })

  it("Items can't have negative quality", function(){
    const gildedRose = new Shop([ 
      new Item('foo',10,0),
      new Item('foo',0,0),
      new Item('Conjured - Shield',10,1),
      new Item('Conjured - Shield',0,1)
    ]);
    const items = gildedRose.updateQuality();
    items.forEach((item)=>{
      expect(item.quality).to.equal(0)
    })
  })

  it("Conjured Items degrade at twice the rate", function(){
    const gildedRose = new Shop([ 
      new Item('Conjured - Spear',10,10),
      new Item('Conjured - Axe',0,10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8)
    expect(items[1].quality).to.equal(6)
  })

});
