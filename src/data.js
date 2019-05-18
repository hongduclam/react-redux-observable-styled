const itemList = [];

for (let i = 0; i < 100; i++) {
  itemList.push({
    id: i,
    imgUrl: "https://www.w3schools.com/w3images/mountains.jpg",
    totalViews: 1000 + i,
    totalComments: 1000 + i,
    totalLikes: 1000 + i
  });
}

export { itemList };
