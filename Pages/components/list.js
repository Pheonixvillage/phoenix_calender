import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getList(dateString) {
  let li = {
    lists: [
      {
        timestamp: 1643522400,
        title: "맛있는거 먹기1",
        specific: "뭐먹으면 좋을라나",
        files: [
          {
            title: "이쁜 사진",
            file: "file:///Users/kimmyeongjun/Library/Developer/CoreSimulator/Devices/722D9B75-87A5-48B7-9385-BCF7105E8223/data/Containers/Data/Application/AE6F1D41-04D2-4C31-ABCA-E8082C2E6B2A/Library/Caches/ExponentExperienceData/%2540hillasen%252Fphoenix_calender/ImagePicker/A0146433-C9BE-49A9-9C1F-1434F53BC6F7.png",
            type: "image",
          },
        ],
      },
      {
        timestamp: 1643522400,
        title: "맛있는거 먹기2",
        specific: "뭐먹으면 좋을라나",
        files: [],
      },
      {
        timestamp: 1643522400,
        title: "맛있는거 먹기3",
        specific: "뭐먹으면 좋을라나",
        files: [],
      },
      {
        timestamp: 1643522400,
        title: "맛있는거 먹기4",
        specific: "뭐먹으면 좋을라나",
        files: [],
      },
      {
        timestamp: 1643522400,
        title: "맛있는거 먹기5",
        specific: "뭐먹으면 좋을라나",
        files: [],
      },
    ],
  };
  console.log(dateString);
  let loc = await AsyncStorage.getItem(dateString);
  if (loc == null) {
    await AsyncStorage.setItem(dateString, JSON.stringify(li));
    console.log(AsyncStorage.getItem(dateString));
    return await AsyncStorage.getItem(dateString);
  } else {
    console.log(AsyncStorage.getItem(dateString));
    return await AsyncStorage.getItem(dateString);
  }
}

export async function saveList(dateString, dlist) {
  console.log(dateString);
  await AsyncStorage.setItem(dateString, JSON.stringify(dlist));
  return await AsyncStorage.getItem(dateString);
}
