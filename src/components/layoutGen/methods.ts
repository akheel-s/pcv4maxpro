import { BreakpointName } from 'vuetify/types/services/breakpoint.d';
import { computed, ref, Ref } from '@vue/composition-api';
import vuetify from '@/plugins/vuetify';

enum ColumnBreakpoints {
  'xs' = 2,
  'sm' = 4,
  'md' = 6,
  'lg' = 10,
  'xl' = 12
}
export const generateLayout = (
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
    y: Math.trunc(index / ColumnBreakpoints[size]),
    i: `${index}`
  }));
};

interface GridItem {
  x: number;
  y: number;
  h: number;
  w: number;
  i: string;
  [x: string]: any;
}
type GridLayout<T extends GridItem> = T[];
const defaultLayout = [
  { x: 0, y: 0, w: 1, h: 1, i: '0' },
  { x: 1, y: 0, w: 1, h: 1, i: '1' },
  { x: 2, y: 0, w: 1, h: 1, i: '2' },
  { x: 3, y: 0, w: 1, h: 1, i: '3' },
  { x: 4, y: 0, w: 1, h: 1, i: '4' },
  { x: 5, y: 0, w: 1, h: 1, i: '5' },
  { x: 6, y: 0, w: 1, h: 1, i: '6' },
  { x: 7, y: 0, w: 1, h: 1, i: '7' },
  { x: 8, y: 0, w: 1, h: 1, i: '8' },
  { x: 9, y: 0, w: 1, h: 1, i: '9' },
  { x: 10, y: 0, w: 1, h: 1, i: '10' },
  { x: 11, y: 0, w: 1, h: 1, i: '11' },
  { x: 0, y: 1, w: 1, h: 1, i: '12' },
  { x: 1, y: 1, w: 1, h: 1, i: '13' },
  { x: 2, y: 1, w: 1, h: 1, i: '14' },
  { x: 3, y: 1, w: 1, h: 1, i: '15' },
  { x: 4, y: 1, w: 1, h: 1, i: '16' },
  { x: 5, y: 1, w: 1, h: 1, i: '17' },
  { x: 6, y: 1, w: 1, h: 1, i: '18' },
  { x: 7, y: 1, w: 1, h: 1, i: '19' }
];
export function generateGrid(newLayout?: Record<any, any>[]) {
  const breakpointSize = computed(() => vuetify.framework.breakpoint.name || 'md');
  const layout: Ref<GridLayout<ReturnType<typeof generateLayout>[0]>> = ref(
    generateLayout(newLayout || defaultLayout, 1, 1, breakpointSize.value)
  );
  const maxCol = computed(() =>
    Math.min(layout.value.length, ColumnBreakpoints[breakpointSize.value])
  );
  const maxColIndex = computed(() => maxCol.value - 1);

  function deleteItem(row: number, col: number) {
    layout.value.splice(
      layout.value.findIndex(({ x, y }) => y === row && x === col),
      1
    );
    layout.value
      .filter(({ x, y }) => y === row && x > col)
      .forEach(({ i }) => {
        layout.value.find(item => item.i === i)!.x--;
      });

    const toMove = layout.value.find(({ x, y }) => y === row + 1 && x === 0);
    if (toMove) {
      layout.value.push({
        ...toMove,
        x: maxColIndex.value,
        y: row
      });
      deleteItem(row + 1, 0);
    }
  }
  function deleteItemById(id: string) {
    const { x, y } = layout.value.find(item => {
      return item.i === id;
    })!;
    deleteItem(x, y);
  }
  function deleteItemByRef(toDelete: typeof layout.value[0]) {
    deleteItemById(toDelete.i);
  }
  function insert(
    toInsert: typeof layout.value[0],
    row: number,
    col: number,
    cleanup: typeof layout.value = []
  ) {
    const toMoveToNextRow = layout.value.find(({ x, y }) => x === maxColIndex.value && y === row);
    if (toMoveToNextRow) toMoveToNextRow.i += 'D';
    layout.value
      .filter(({ x, y }) => y === row && x >= col && x < maxColIndex.value)
      .forEach(({ i }) => {
        layout.value.find(item => item.i === i)!.x++;
      });
    layout.value.push({
      ...toInsert,
      x: col,
      y: row
    });
    if (toMoveToNextRow) {
      //   console.log(JSON.stringify(toMoveToNextRow, null, 4));

      insert({ ...toMoveToNextRow, i: toMoveToNextRow.i.slice(0, -1) }, row + 1, 0, [
        ...cleanup,
        toMoveToNextRow
      ]);
      deleteItemByRef(toMoveToNextRow);
    }
  }
  function shift(item: typeof layout.value[0], row: number, col: number) {
    const { x: currentCol, y: currentRow } = item;
    insert(item, row, col);
    deleteItem(currentRow, currentCol);
  }
  return {
    layout,
    shift,
    deleteItem,
    insert,
    maxCol
  };
}
