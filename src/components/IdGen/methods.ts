export default function generateId(collection: Record<any, any>[]) {
  return collection.map((item, index) => ({
    ...item,
    id: index
  }));
}
