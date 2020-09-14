import { BreakpointName } from 'vuetify/types/services/breakpoint.d';

enum ColumnBreakpoints {
  'xs' = 2,
  'sm' = 4,
  'md' = 6,
  'lg' = 10,
  'xl' = 12
}
const generateLayout = (
  collection: Record<any, any>[],
  h: number,
  w: number,
  size: BreakpointName
) => {
  return collection.map((item, index) => ({
    ...item,
    h,
    w,
    x: index % ColumnBreakpoints[size],
    y: Math.trunc(index / ColumnBreakpoints[size])
  }));
};
export default generateLayout;
