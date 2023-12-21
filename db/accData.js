import AsyncStorage from '@react-native-async-storage/async-storage';

const ACC_DATA_KEY = 'accData';

export const getAccData = async () => {
  try {
    const accDataString = await AsyncStorage.getItem(ACC_DATA_KEY);
    return accDataString ? JSON.parse(accDataString) : null;
  } catch (error) {
    console.error('Ошибка при получении данных:', error.message);
    return null;
  }
};

export const setAccData = async (accData) => {
  try {
    await AsyncStorage.setItem(ACC_DATA_KEY, JSON.stringify(accData));
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error.message);
  }
};
