import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(file_location: string) {
  const filePath = path.join(process.cwd(), file_location);
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);

  return objectData
}

