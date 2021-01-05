const GameTypeMap = new Map([
  [0, "全部"],
  [1, "电子"],
  [2, "真人"],
  [3, "彩票"],
  [4, "体育"],
  [5, "电竞"],
  [6, "棋牌"],
  [7, "鱼机"],
  [90, "高热门度"],
  [99, "直播"],
]);

const GetGameTypeName = (gameTypeID) => GameTypeMap.get(gameTypeID);

export default GetGameTypeName;
